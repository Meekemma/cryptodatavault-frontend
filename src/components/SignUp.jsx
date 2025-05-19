import React, { useState, useContext } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import '../styles/registration.css';
import '../styles/CustomCarousel.css';
import google from '../assets/images/google.svg';
import PolicyFooter from './PolicyFooter';
import AuthContext from '../context/AuthContext'; 

const SignUp = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password, password2 } = formData;

    if (!first_name || !last_name || !email || !password || !password2) {
      toast.error("All fields are required");
      return;
    }

    if (password !== password2) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/register/`, formData);
      if (res.status === 201) {
        localStorage.setItem('email', formData.email);
        navigate("/verification");
        toast.success("Registration successful!");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      let message = 'An error occurred. Please try again.';

      if (error.response?.data) {
        const data = error.response.data;
        if (data.message) {
          message = data.message;
        } else if (data.detail) {
          message = data.detail;
        } else if (typeof data === 'string') {
          message = data;
        } else if (typeof data === 'object') {
          // Display first error if multiple
          const firstError = Object.values(data)[0];
          message = Array.isArray(firstError) ? firstError[0] : firstError;
        }
      }

      console.error('Registration error:', error.response?.data || error);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create an account</h2>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="password2"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowConfirmPassword(prev => !prev)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button type="submit" className='create-button' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Continue'}
          </button>
        </form>

        <p className="login-link">
          Already have an account?{' '}
          <span 
            className="cursor-pointer hover:underline" 
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>

        <div className="text-center">
          <div className="or-divider"><span>OR</span></div>
          <button className="google-button" onClick={loginWithGoogle}>
            <img src={google} alt="Google logo" className="google-logo" />
            Continue with Google
          </button>
        </div>
      </div>

      <PolicyFooter />
    </>
  );
};

export default SignUp;
