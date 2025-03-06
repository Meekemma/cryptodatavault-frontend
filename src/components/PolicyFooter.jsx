import React, { useState } from 'react';
import '../styles/main.css';
import { useNavigate } from 'react-router-dom';

const PolicyFooter = () => {
  const navigate = useNavigate();

  const handleTerms = () => {
    navigate('/terms-condition');
  };

  const handlePrivacy = () => {
    navigate('/privacy-policy');
  };

  return (
    <div className="policy-footer text-xs text-center my-8">
      <button onClick={handleTerms} className="text-[#1D2B53] hover:underline">
        Terms of Use
      </button>
      {" | "}
      <button onClick={handlePrivacy} className="text-[#1D2B53] hover:underline">
        Privacy Policy
      </button>
    </div>
  );
};

export default PolicyFooter;
