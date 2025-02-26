import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import useGoogleResponse from '../utils/useGoogleResponse'; 



const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useGoogleResponse();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/login/`, formData);
      const response = res.data;

      const user = {
        email: response.email,
        names: response.full_name
      };

      if (res.status === 200) {

        const accessToken = response.access;
        const refreshToken = response.refresh;
        
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('access_token', accessToken); 
        localStorage.setItem('refresh_token', refreshToken);
        localStorage.setItem('user_id', JSON.stringify(response.user_id));
        localStorage.setItem('is_verified', JSON.stringify(response.is_verified));
        
        setUser(user);

        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Login failed. Please try again");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Login failed. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };



  const loginWithGoogle = () => {
    const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    
    // Correctly concatenate BASE_API_URL with the endpoint
    const REDIRECT_URI = `${BASE_URL}/base/google-login/`;

    const scope = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ');

    const params = {
        response_type: 'code',
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        prompt: 'select_account',
        access_type: 'offline',
        scope
    };

    const urlParams = new URLSearchParams(params).toString();
    window.location = `${GOOGLE_AUTH_URL}?${urlParams}`;
    

    
}





  const logoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('is_verified');
    setUser(null);
    navigate('/login');
  };

  const contextData = {
    formData,
    handleChange,
    user,
    loginUser,
    loginWithGoogle,
    logoutUser
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>

    
  );
};
