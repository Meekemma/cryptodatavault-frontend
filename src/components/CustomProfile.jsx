import React, { useState, useEffect, useContext } from 'react';
import axiosInstance from '../utils/axiosInstance';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';
import DashBoardFooter from './DashBoardFooter';

const CustomProfile = () => {
  const { user } = useContext(AuthContext);
  const [preview, setPreview] = useState('');
  const [countryOptions, setCountryOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user_id = localStorage.getItem('user_id');

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    profile_picture: null,
    phone_number: '',
    country: '',
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countries = data.map(country => country.name.common);
        setCountryOptions(countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get(`/user_profile/${user_id}/`);
        if (response.status === 200) {
          const userData = response.data;
          setFormData({
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            gender: userData.gender,
            profile_picture: null,
            phone_number: userData.phone_number,
            country: userData.country,
          });
          if (userData.profile_picture) {
            setPreview(userData.profile_picture);
          }
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [user_id]);

  useEffect(() => {
    if (formData.profile_picture) {
      setPreview(URL.createObjectURL(formData.profile_picture));
    } else {
      setPreview('');
    }
  }, [formData.profile_picture]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile_picture') {
      if (window.confirm("Are you sure you want to upload a new photo?")) {
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== undefined) {
        if (key === 'profile_picture' && formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]); // Only append if profile picture is a file
        } else if (key !== 'profile_picture') {
          formDataToSend.append(key, formData[key]); // Append other fields normally
        }
      }
    });

    try {
      const res = await axiosInstance.put(`/user_profile/${user_id}/`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      if (res.status === 200) {
        toast.success("Profile successfully updated");
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      if (error.response) {
        toast.error(error.response.data.message || "Error updating profile");
      } else {
        toast.error("Error updating profile");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          {preview && <img src={preview} alt="Profile Preview" className="w-32 h-32 object-cover rounded-full border-2 border-gray-300" />}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <h2 className="text-2xl font-bold mb-4">Custom Profile</h2>
          
          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-sm font-semibold mb-1">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="last_name" className="text-sm font-semibold mb-1">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={true}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm font-semibold mb-1">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="profile_picture" className="text-sm font-semibold mb-1">Profile Picture</label>
            <input
              type="file"
              id="profile_picture"
              name="profile_picture"
              accept="image/*"
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-2">Upload a profile picture (JPEG, PNG, GIF)</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone_number" className="text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="country" className="text-sm font-semibold mb-1">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select country</option>
              {countryOptions.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#1D2B53] text-white font-semibold rounded-md hover:bg-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? 'Loading....' : 'Submit'}
          </button>
        </form>
      </div>

      <DashBoardFooter />
    </>
  );
};

export default CustomProfile;
