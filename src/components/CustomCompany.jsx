import React, { useEffect } from 'react';
import CustomAppBar from './CustomAppBar';
import Footer from './Footer';
import partner_img2 from '../assets/images/partner_img2.svg';
import company from '../assets/images/company.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomCompany = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <>
      <CustomAppBar />
      <div className='container mx-auto px-4 my-8'>
        <h3 className="text-4xl font-extrabold mb-4" data-aos="fade-up">Who we are?</h3>
        <h4 className='font-bold' data-aos="fade-up">
        Trexiz LTD Trade is a pioneering fintech startup and world-class provider of online trading for multi-asset financial products
        </h4>
        <p className='my-3' data-aos="fade-up">
          The team has experience of over 10 years in Stocks/forex/ETFs /Commodities/CFDs.
          Our Cryptocurrency team is one of the earliest adopters of blockchain technology from bitcoin/ Ethereum mining,
          DeFi farming, liquidity pool mining.
        </p>

        <p className='my-3' data-aos="fade-up">
        Trexiz LTD Trade wants to innovate the financial industry and be the first multi-asset broker to adapt the DeFi (decentralised finance) technology in its operations.
          Our mission is to offer the traditional investors access to crypto/DeFi / asset class with award-winning Meta trader 5.
          Our exchange platform built on Angular JS that can transact 100,000 orders per second linked to deep liquidity on CFDs & cryptos.
        </p>

        <p className='my-3' data-aos="fade-up">
          Trexiz LTD Trade addresses this major problem by giving easy access to all investors worldwide to get access to crypto / DeFi asset class with a professional and secure trading technology.
        </p>

        <p className='my-3' data-aos="fade-up">
          Trexiz LTD Trade we heard the concerns of millions of traders, that why it created by traders for traders
        </p>

        <h4 className='font-bold' data-aos="fade-up">Trexiz LTD Trade is a pioneering fintech startup and world-class provider of online trading for multi-asset financial products</h4>

        <div className='flex flex-col md:flex-row md:space-x-4 mt-7'>
          <div className="md:w-1/2 p-4 flex justify-center" data-aos="fade-right">
            <img src={partner_img2} alt="Broker" className="max-w-full h-auto md:max-w-sm" />
          </div>

          <div className="flex-1 md:p-4" data-aos="fade-left"> {/* Use flex-1 to take remaining space */}
            <h4 className='text-4xl font-extrabold mb-2 md:text-5xl text-[#1D2B53]'>Why</h4>
            <h3 className='text-2xl font-extrabold mb-4 md:text-3xl text-[#1D2B53]'>Trexiz LTD?</h3>

            <div className='mt-3'>
              <h2 className='text-xl font-bold mb-2 text-[#1D2B53]'>EXCEPTIONAL CUSTOMER SERVICE</h2>
              <p>A well-trained, multilingual service team solves the queries of the clients in a 24/7 manner. 
                The skilful team has sound knowledge and experience in the field to fulfil their needs through email, chat, and voice calls.
              </p>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-bold mb-2 text-[#1D2B53]'>DIET SPREAD</h2>
              <p>QuickTrade facilitates diet spread, an excellent compass leads to victory. 
                One pipette may change the game. The ultra-thin spread helps traders to get their edge in the market.
              </p>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-bold mb-2 text-[#1D2B53]'>RAPID EXECUTION</h2>
              <p>High volatile markets as CFD require speedy execution to catch the right price. 
                In prevailing market condition, QuickTrade provides a microsecond order execution model for clients. 
                Low spread and fast execution are great advantages for scalpers and day traders.
              </p>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-bold mb-2 text-[#1D2B53]'>INSTANT DEPOSIT AND WITHDRAWAL</h2>
              <p>Instant deposit and withdrawal is a prime task for us. It is a significant process among the entire functions. 
                We support various modes like online transfer, major paymasters, wallet transfer, etc., and accept vast amounts like fiat currencies, digital currencies, tokens, etc.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:space-x-4 mt-7'>
          <div className="flex-1 md:p-4 order-1 md:order-none" data-aos="fade-right"> {/* Use flex-1 to take remaining space */}
            <div className='mt-3'>
              <h2 className='text-xl font-bold mb-2 text-[#1D2B53]'>TRADING PLATFORMS AND TOOLS</h2>
              <p>
                Metatrader5 is a reliable and best platform for CFD markets. 
                We provide both MT5 and web platform for the convenience of part time and full-time participants. 
                Trexiz LTD comes up with a mobile and desktop version of them.
              </p>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-bold mb-2 text-[#1D2B53]'>KNOWLEDGE SHARING</h2>
              <p>
                Weekly live training and recorded videos of the sessions assist traders to get valuable insight and updates on trading. 
                One-to-one sessions also available based on demand.
              </p>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-bold mb-2 text-[#1D2B53]'>STEER TO A WEALTHY LIFE</h2>
              <p>
                Decentralized finance is the future of the global economy. 
                Trexiz LTD guides the investors and traders to be a pioneer in the field by buy and sell digital currencies and tokens as well as contribute funds to enhance DeFi liquidity.
              </p>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-bold mb-2 text-[#1D2B53]'>INSTANT DEPOSIT AND WITHDRAWAL</h2>
              <p>Instant deposit and withdrawal is a prime task for us. It is a significant process among the entire functions. 
                We support various modes like online transfer, major paymasters, wallet transfer, etc., and accept vast amounts like fiat currencies, digital currencies, tokens, etc.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 p-4 flex justify-center order-none md:order-1" data-aos="fade-left">
            <img src={company} alt="company" className="max-w-full h-auto md:max-w-sm" />
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default CustomCompany;
