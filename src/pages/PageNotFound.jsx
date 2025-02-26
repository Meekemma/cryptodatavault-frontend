import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../styles/CustomCarousel.css';


const PageNotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate('/');
    };
  
    return (
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <button
          onClick={handleGoBack}
          className="text-white create-account-button hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >
          Go Back
        </button>
      </section>
    );
  };
  

export default PageNotFound