import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import google from '../assets/images/google.svg';
import PolicyFooter from './PolicyFooter';
import AuthContext from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const CustomLogin = () => {
  const { formData, handleChange, loginUser, loginWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUser(e);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
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
                type={showPassword ? "text" : "password"} // Toggle between text and password
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(prevState => !prevState)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button type="submit" className='create-button' disabled={loading}>
            {loading ? 'Loading...' : 'Continue'}
          </button>
        </form>
        <div className="flex justify-between">
          <div>
            <p className="login-link">Don't have an account?</p>
            <span
              className="cursor-pointer hover:underline login-link"
              onClick={() => navigate('/signup')}
            >
              SignUp
            </span>
          </div>

          <p className="login-link">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate('/reset-password')}
            >
              Forgot Password?
            </span>
          </p>
        </div>

        
        <div className="text-center">
          <div className="or-divider">
            <span>OR</span>
          </div>
          <button className="google-button" onClick={loginWithGoogle} disabled={loading}>
            <img src={google} alt="Google logo" className="google-logo" />
            Continue with Google
          </button>
        </div>
      </div>
      <PolicyFooter />
    </>
  );
};

export default CustomLogin;
