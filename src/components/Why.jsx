import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import coingecko from '../assets/images/coingecko.svg';
import coinpayments from '../assets/images/CoinPayments.svg';
import binance from '../assets/images/Binance.svg';
import why from '../assets/images/why.jpg';

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto px-4 my-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1" data-aos="fade-right">
          <div className="trade">
            <img src={why} alt="Why Trexiz" className="w-full h-auto max-w-[400px] mx-auto rounded-lg" />
          </div>
        </div>

        <div className="flex-1" data-aos="fade-left">
          <h4 className="text-4xl font-extrabold mb-2 md:text-5xl text-[#1D2B53]">Why</h4>
          <h3 className="text-2xl font-extrabold mb-4 md:text-3xl text-[#1D2B53]">Trexiz LTD?</h3>

          <div className="mt-3">
            <h2 className="text-xl font-bold mb-2 text-[#1D2B53]">EXCEPTIONAL CUSTOMER SERVICE</h2>
            <p>
              A well-trained, multilingual service team solves the queries of the clients in a 24/7 manner. The skillful team has sound knowledge and experience in 
              the field to fulfill their needs through email, chat, and voice calls.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2 text-[#1D2B53]">DIET SPREAD</h2>
            <p>
              Trexiz LTD facilitates diet spread, an excellent compass leads to victory. One pipette may change the game. The ultra-thin spread helps traders get their edge in the market.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2 text-[#1D2B53]">RAPID EXECUTION</h2>
            <p>
              High volatile markets as CFD require speedy execution to catch the right price. In prevailing market conditions, Trexiz LTD provides a microsecond order execution model for clients. Low spread and fast execution are great advantages for scalpers and day traders.
            </p>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="my-12">
        <h1 className="text-center font-extrabold text-4xl mb-6 text-[#1D2B53]">Sponsors</h1>
        <div className="flex flex-wrap justify-center gap-6 px-4 md:flex-nowrap">
          <img src={binance} alt="Binance" className="w-[120px] md:w-[150px] h-auto max-w-[40%]" />
          <img src={coingecko} alt="Coingecko" className="w-[120px] md:w-[150px] h-auto max-w-[40%]" />
          <img src={coinpayments} alt="CoinPayments" className="w-[120px] md:w-[150px] h-auto max-w-[40%]" />
        </div>
      </div>
    </div>
  );
};

export default Why;
