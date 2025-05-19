import React, { useState } from 'react';
import '../styles/CustomCarousel.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Subscription = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
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
      const res = await axios.post(`${BASE_URL}/email-subscription/`, formData);
      if (res.status === 200) {
        toast.success('Successfully subscribed to the newsletter');
        setFormData({ email: '' });
      }
    } catch (error) {
      let message = 'Subscription failed. Please try again.';

      if (error.response?.data) {
        const data = error.response.data;
        if (data.message) {
          message = data.message;
        } else if (data.detail) {
          message = data.detail;
        } else if (data.email && Array.isArray(data.email)) {
          message = data.email[0];
        } else if (typeof data === 'string') {
          message = data;
        } else if (typeof data === 'object') {
          const firstError = Object.values(data)[0];
          message = Array.isArray(firstError) ? firstError[0] : firstError;
        }
      }

      console.error('Subscription error:', error.response?.data || error);
      toast.error(message);
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
        <form
          className="subscription-form flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
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
