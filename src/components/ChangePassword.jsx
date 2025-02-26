import React, { useState } from 'react';
import '../styles/CustomCarousel.css';
import '../styles/main.css';
import PolicyFooter from './PolicyFooter';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../utils/axiosInstance';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    old_password: '',
    new_password: '',
    confirm_password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { old_password, new_password, confirm_password } = formData;
    if (!old_password || !new_password || !confirm_password) {
      toast.error("All fields are required");
      return;
    }
    if (new_password !== confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axiosInstance.put("change-password/", formData);
      if (res.status === 200) {
        navigate("/profile");
        toast.success("Password changed successfully");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Change Password</h2>
          <div className="form-group">
            <label htmlFor="old-password">Old Password</label>
            <input
              id="old_password"
              type="password"
              name="old_password"
              value={formData.old_password}
              onChange={handleChange}
              placeholder="Enter old password"
              required
            />

            <label htmlFor="new-password">New Password</label>
            <input
              id="new-password"
              type="password"
              name="new_password"
              value={formData.new_password}
              onChange={handleChange}
              placeholder="Enter new password"
              required
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              placeholder="Enter confirm password"
              required
            />
            <button type="submit" className="create-button" disabled={isLoading}>
              {isLoading ? 'Loading.....' : 'Continue'}
            </button>
          </div>
        </form>
      </div>

      <div>
        <PolicyFooter />
      </div>
    </>
  );
};

export default ChangePassword;
