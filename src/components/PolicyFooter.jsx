import React from 'react';
import '../styles/main.css'; 
import { useNavigate } from 'react-router-dom';

const PolicyFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="policy-footer text-xs text-center my-8">
      <a href="#">Terms of Use | Privacy Policy</a>
    </div>
  );
};

export default PolicyFooter;
