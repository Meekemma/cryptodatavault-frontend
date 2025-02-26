import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../styles/CustomCarousel.css';
import nft from '../assets/images/nft.svg';
import pana from '../assets/images/pana.svg';
import svgexport from '../assets/images/svgexport.svg';
import svge from '../assets/images/svge.svg';

const carouselItems = [
  {
    imgSrc: nft,
    text: 'Invest in What Matters to You',
    button1Text: 'Trade Now',
  },
  {
    imgSrc: pana,
    text: 'Trade Bitcoin/Ethereum DeFi Token with BobbyGram',
    button1Text: 'Trade Now',
  },
  {
    imgSrc: svgexport,
    text: 'Bitcoin will Break all Time High Or Fall Back?',
    text2: 'Buy & Sell crypto futures / CFDs in MT5',
    button1Text: 'Trade Now',
  },
  {
    imgSrc: svge,
    text: 'Trade FX Currency Pair with Crypto & StableCoins',
    text2: 'ECN & DMA aggregated liquidity',
    button1Text: 'Trade Now',
  },
];

const CustomCarousel = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleOnClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div className="carousel-slide">
          <img
            src={carouselItems[currentSlide].imgSrc}
            alt={`Slide ${currentSlide + 1}`}
            className="carousel-image"
            loading="lazy"
          />
          <div className="carousel-content">
            <div className="carousel-text">
              <h2>{carouselItems[currentSlide].text}</h2>
              {carouselItems[currentSlide].text2 && (
                <p>{carouselItems[currentSlide].text2}</p>
              )}
              <button className="create-button" onClick={handleOnClick}>
                {carouselItems[currentSlide].button1Text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;