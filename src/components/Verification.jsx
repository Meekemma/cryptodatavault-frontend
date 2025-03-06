import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomCarousel.css';
import PolicyFooter from './PolicyFooter';
import axios from 'axios';

const Verification = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [codes, setCodes] = useState(Array(6).fill(''));
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const refs = Array(6)
    .fill()
    .map((_, index) => useRef(null));

  const handleChange = (index, value) => {
    if (value.length === 1 && index < 5) {
      refs[index + 1].current.focus();
    }
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && !codes[index]) {
      refs[index - 1].current.focus();
    }
  };

  const handleResendCode = async () => {
    const email = localStorage.getItem('email');
    if (!email) {
      toast.error('Email not found. Please try again.');
      return;
    }
    try {
      await axios.post(`{BASE_URL}/resend_otp/`, {email});
      toast.success('Verification code resent');
    } catch (error) {
      console.error('Error resending verification code:', error);
      toast.error('Error resending verification code');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const code = codes.join('');
    if (code.length !== 6) {
      setError('Please enter a complete 6-digit code');
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`{BASE_URL}/verify_code/`, { code });
      if (response.status === 200) {
        toast.success('Code verified successfully');
        navigate('/login');
      } else {
        setError('Invalid verification code');
      }
    } catch (error) {
      setError('Error verifying code');
      console.error('Error verifying code:', error);
      toast.error('Error verifying code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-egyptian flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4 text-center">Confirmation Code</h1>
          <p className="text-gray-600 mb-6">Please enter the verification code sent to your email</p>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mb-6">
              {codes.map((code, index) => (
                <input
                  key={index}
                  ref={refs[index]}
                  type="text"
                  className="border border-gray-400 rounded-lg px-4 py-2 w-12 text-center text-lg font-bold focus:outline-none focus:border-blue-500 mx-1"
                  value={code}
                  maxLength={1}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="flex justify-center mb-6">
              <button
                className="create-button text-white font-bold py-2 px-4 rounded flex-grow focus:outline-none focus:shadow-outline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 disabled:opacity-50"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Continue'}
              </button>
            </div>
            <span className="text-gray-600 px-5">
              Didn't receive a verification code?{' '}
              <a
                href="#"
                className="text-[#4A4A4A] hover:underline"
                onClick={handleResendCode}
              >
                Resend
              </a>
            </span>
          </form>
        </div>
      </div>
      <div>
        <PolicyFooter />
      </div>
    </>
  );
};

export default Verification;
