import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/CustomCarousel.css';
import PolicyFooter from './PolicyFooter';
import { toast } from "react-toastify";
import axios from "axios";

const CustomResetPasswordConfirm = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirm_password } = formData;

    if (!password || !confirm_password) {
      toast.error("Both fields are required");
      return;
    }

    if (password !== confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${BASE_URL}/api/password_reset/confirm/`,
        { password, token }
      );

      if (res.status >= 200 && res.status < 300) {
        const message =
          res.data?.message ||
          res.data?.detail ||
          "Password reset successfully! You can now log in.";
        toast.success(message);
        setFormData({ password: "", confirm_password: "" });
        navigate("/login");
      } else {
        toast.error("Password reset failed.");
      }
    } catch (error) {
      let message = "Failed to reset password.";
      const data = error.response?.data;

      if (data) {
        if (data.message) {
          message = data.message;
        } else if (data.detail) {
          message = data.detail;
        } else if (typeof data === "string") {
          message = data;
        } else if (typeof data === "object") {
          const firstError = Object.values(data)[0];
          message = Array.isArray(firstError) ? firstError[0] : firstError;
        }
      }

      console.error("Password reset confirm error:", data || error);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-egyptian flex justify-center items-center min-h-screen">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
          <form className="mx-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
            <p className="text-center text-gray-600 mb-6">
              Enter your new password below.
            </p>

            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
              required
            />

            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm new password"
              required
            />

            <button
              type="submit"
              className="create-button text-white font-bold py-2 px-4 rounded flex-grow focus:outline-none focus:shadow-outline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 disabled:opacity-50 w-full bg-black"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>

      <PolicyFooter />
    </>
  );
};

export default CustomResetPasswordConfirm;
