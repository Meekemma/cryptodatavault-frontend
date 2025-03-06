import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomCarousel.css';
import PolicyFooter from './PolicyFooter';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../styles/CustomCarousel.css';


const ResetPassword = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/api/password_reset/request/`, { email });

      if (response.status === 200) {
        toast.success('Password reset link sent to your email.');
        setEmail('');
        setTimeout(() => navigate('/login'), 3000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send reset email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-egyptian flex justify-center items-center h-screen">
        <div className="bg-white p-4 rounded-lg shadow-lg">
        
          <form className="change-password-form mx-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4 text-center ">Reset Password</h2>
            
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4  py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="create-button text-white font-bold py-2 px-4 rounded flex-grow focus:outline-none focus:shadow-outline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 disabled:opacity-50" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>

        </div>
      </div>

      

      <PolicyFooter />
    </>
  );
};

export default ResetPassword;
