import React, { useEffect, useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomAppBar from './CustomAppBar';
import type from '../assets/images/type.jpg'; 
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Footer from './Footer';

const TradingTable = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleOnClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  const data = [
    { noHeader: 'Trading Platform', column1: 'MetaTrader 5', column2: 'MetaTrader 5', column3: 'MetaTrader 5' },
    { noHeader: 'Account Currency', column1: 'USD', column2: 'USD', column3: 'USD' },
    { noHeader: 'Leverage', column1: 'From 1:10 to 1:500', column2: 'From 1:10 to 1:500', column3: 'From 1:10 to 1:500' },
    { noHeader: 'Maximum Deposit', column1: 'No Limit', column2: 'No Limit', column3: 'No Limit' },
    { noHeader: 'Minimum Deposit', column1: '$200', column2: '$1000', column3: '$5000' },
    { noHeader: 'Order Execution', column1: 'Market', column2: 'Market', column3: 'Market' },
    { noHeader: 'Spread from', column1: '1.5', column2: '1.2', column3: 'RAW' },
    { noHeader: 'Margin Call', column1: '50%', column2: '50%', column3: '50%' },
    { noHeader: 'Stop Out', column1: '30%', column2: '30%', column3: '30%' },
    { noHeader: 'Swap-Free', column1: 'No', column2: 'No', column3: 'No' },
    { noHeader: 'Limit & Stop Order', column1: '5 Spread', column2: '5 Spread', column3: '5 Spread' },
    { noHeader: 'Minimum Volume in Lots/Trade', column1: '0.01', column2: '0.01', column3: '0.01' },
    { 
      noHeader: 'Trading Instruments', 
      column1: 'FX Major, FX Crossess, FX Minor, FX TRY, Spot Metals, CFDs, Spot Indices, Shares, Cryptocurrencies', 
      column2: 'FX Major, FX Crossess, FX Minor, FX TRY, Spot Metals, CFDs, Spot Indices, Shares, Cryptocurrencies', 
      column3: 'FX Major, FX Crossess, FX Minor, FX TRY, Spot Metals, CFDs, Spot Indices, Shares, Cryptocurrencies' 
    },
  ];

  return (
    <div>
      <CustomAppBar />

      <div className="container mx-auto px-4 my-8">
        <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
          <div className="flex-1">
            <h4 className="text-3xl font-extrabold text-wrap md:text-balance">Trading Account Type</h4>
            <p className="mt-4 text-lg">
              With our 3 types of trading accounts, you will find the complete flexibility to trade at the level you want.
            </p>

            <div className="mt-6">
              <button className="create-button" onClick={handleOnClick}>
                Trade Now
              </button>
            </div>
          </div>

          <div className="flex-1">
            <img src={type} alt="Trading Account Type" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8 overflow-x-auto" data-aos="fade-up">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-4"></th> {/* Increased padding */}
              <th className="px-6 py-4 bg-[#BA0021] text-white">STARTER</th> {/* Increased padding */}
              <th className="px-6 py-4 bg-[#355e3b] text-white">STANDARD</th>
              <th className="px-6 py-4 bg-[#0C0404] text-white">ADVANCE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="text-left">
                <td className="px-6 py-4 font-bold">{row.noHeader}</td> {/* Increased padding */}
                <td className="px-6 py-4 text-center text-[#36454F] whitespace-normal w-[300px]"> {/* Added width */}
                  {row.column1.split(', ').map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </td>
                <td className="px-6 py-4 text-center text-[#36454F] whitespace-normal w-[300px]">
                  {row.column2.split(', ').map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </td>
                <td className="px-6 py-4 text-center text-[#36454F] whitespace-normal w-[300px]">
                  {row.column3.split(', ').map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='mt-4' data-aos="fade-up">
          <h3 className='text-2xl font-extrabold mb-4 md:text-3xl text-[#1D2B53]'>Notes</h3>

          <ul className='list-outside hover:list-inside'>
            <li className='my-2'>Spreads are variable and during volatile time spreads might expand.</li>
            <li className='my-2'>Leverage will be changed as per account size and exposure (lots traded).</li>
            <li className='my-2'>Please read the trading terms & Conditions for further information. </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TradingTable;
