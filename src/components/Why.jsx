import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import coingecko from '../assets/images/coingecko.svg';
import coinpayments from '../assets/images/CoinPayments.svg';
import binance from '../assets/images/Binance.svg';
import Forex from './Forex';

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 my-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1" data-aos="fade-right">
            {/* Placeholder for trade-related content or images */}
            <div className="trade">
              <Forex />
            </div>
          </div>

          <div className="flex-1" data-aos="fade-left">
            <h4 className="text-4xl font-extrabold mb-2 md:text-5xl text-[#1D2B53]">Why</h4>
            <h3 className="text-2xl font-extrabold mb-4 md:text-3xl text-[#1D2B53]">QuickTrade LTD?</h3>

            <div className="mt-3">
              <h2 className="text-xl font-bold mb-2 text-[#1D2B53]">EXCEPTIONAL CUSTOMER SERVICE</h2>
              <p>
                A well-trained, multilingual service team solves the queries of the clients in a 24/7 manner. The skilful team has sound knowledge and experience in 
                the field to fulfil their needs through email, chat, and voice calls.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2 text-[#1D2B53]">DIET SPREAD</h2>
              <p>
                QuickTrade facilitates diet spread, an excellent compass leads to victory. One pipette may change the game. The ultra-thin spread helps traders to get their edge in the market.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2 text-[#1D2B53]">RAPID EXECUTION</h2>
              <p>
                High volatile markets as CFD require speedy execution to catch the right price. In prevailing market condition, QuickTrade provides a microsecond order execution model for clients. Low spread and fast execution are great advantages for scalpers and day traders.
              </p>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="my-12">
  <h1 className="text-center font-extrabold text-4xl mb-6 text-[#1D2B53]">
    Sponsors
  </h1>
  <div className="flex flex-wrap justify-center gap-6 px-4 md:flex-nowrap">
  <img src={binance} alt="Binance" className="w-[150px] h-auto mobile:flex-1 mobile:max-w-[45%]" />
  <img src={coingecko} alt="Coingecko" className="w-[150px] h-auto mobile:flex-1 mobile:max-w-[45%]" />
  <img src={coinpayments} alt="CoinPayments" className="w-[150px] h-auto mobile:flex-1 mobile:max-w-[90%]" />
</div>
</div>



      </div>
    </>
  );
}

export default Why;