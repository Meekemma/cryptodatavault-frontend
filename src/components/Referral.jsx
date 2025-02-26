import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import PolicyFooter from './PolicyFooter';
import axiosInstance from '../utils/axiosInstance';

const Referral = () => {
  const [formData, setFormData] = useState({
    code: '', 
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { code } = formData;
    
    // Adjust length validation if necessary (based on your referral code logic)
    if (code.length !== 7) {  
      toast.error("Invalid referral code length");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axiosInstance.post("/management/referrals/", { code });  // Send only the 'code'
      if (res.status === 201 || res.status === 200) { // Handle both success statuses
        toast.success("Valid referral code");
        navigate("/login");
      } else {
        toast.error("Invalid referral code");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Invalid referral code");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className='signup-form'>
          <h2>Referral Code</h2>
          <form onSubmit={handleSubmit} className="form-group">
            <input
              type="text"
              name="code"
              value={formData.code}  // Bind to the correct formData key
              onChange={handleChange}
              placeholder="Enter referral code (Optional)"
            />
            <div className='flex justify-between mt-3'>
                <button 
                  type="submit" 
                  className="create-button  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
                <button 
                  type="button" 
                  className="create-button focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={() => navigate('/profile')}
                >
                  Continue
                </button>
              </div>
          </form>
        </div>
      </div>
      <div className="footer-container">
        <PolicyFooter />
      </div>
    </>
  );
};

export default Referral;
