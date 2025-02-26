import React, { useState } from 'react';
import '../styles/CustomCarousel.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Subscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/email-subscription/', formData);
      if (res.status === 200) {
        toast.success('Successfully subscribed to the newsletter');
        setFormData({ email: '' }); // Reset the form to initial state
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data); // Log the detailed error response
        const errorMessage = error.response.data.email?.[0] || 'Subscription failed. Please try again.';
        toast.error(errorMessage);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="subscription-container my-8 px-4">
        <h2 className="subscription-title text-2xl font-bold text-center mb-4">
          Subscribe to our Newsletter
        </h2>
        <form className="subscription-form flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            className="subscription-input flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="subscription-button bg-[#000] text-white px-6 py-2 rounded-md hover:bg-[#000] transition duration-300 disabled:bg-[#000]"
            disabled={isLoading}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Subscription;