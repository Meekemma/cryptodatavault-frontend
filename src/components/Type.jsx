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
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleOnClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  const data = [
    { noHeader: 'Trading Platform', column0: 'MetaTrader 5', column1: 'MetaTrader 5', column2: 'MetaTrader 5', column3: 'MetaTrader 5' },
    { noHeader: 'Account Currency', column0: 'USD', column1: 'USD', column2: 'USD', column3: 'USD' },
    { noHeader: 'Leverage', column0: 'From 1:10 to 1:500', column1: 'From 1:10 to 1:500', column2: 'From 1:10 to 1:500', column3: 'From 1:10 to 1:500' },
    { noHeader: 'Maximum Deposit', column0: 'No Limit', column1: 'No Limit', column2: 'No Limit', column3: 'No Limit' },
    { noHeader: 'Minimum Deposit', column0: '$50', column1: '$500', column2: '$3000', column3: '$10,000' },
    { noHeader: 'Order Execution', column0: 'Market', column1: 'Market', column2: 'Market', column3: 'Market' },
    { noHeader: 'Spread from', column0: '2.0', column1: '1.5', column2: '1.2', column3: '0.2 + $6' },
    { noHeader: 'Margin Call', column0: '50%', column1: '50%', column2: '50%', column3: '50%' },
    { noHeader: 'Stop Out', column0: '30%', column1: '30%', column2: '30%', column3: '30%' },
    { noHeader: 'Swap-Free', column0: 'No', column1: 'No', column2: 'No', column3: 'No' },
    { noHeader: 'Limit & Stop Order', column0: '5 Spread', column1: '5 Spread', column2: '5 Spread', column3: '5 Spread' },
    { noHeader: 'Minimum Volume in Lots/Trade', column0: '0.01', column1: '0.01', column2: '0.01', column3: '0.01' },
    {
      noHeader: 'Trading Instruments',
      column0: 'FX Major, Metals, Indices',
      column1: 'FX Major, FX Crosses, Metals, Indices',
      column2: 'FX Major, FX Minor, Metals, CFDs, Crypto',
      column3: 'All Instruments: FX, Crypto, Metals, CFDs, Shares'
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
              Choose from 4 powerful trading plans tailored to every trader—from beginner to expert.
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
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4 bg-[#8B0000] text-white">PILOT</th>
              <th className="px-6 py-4 bg-[#BA0021] text-white">STARTER</th>
              <th className="px-6 py-4 bg-[#355e3b] text-white">STANDARD</th>
              <th className="px-6 py-4 bg-[#0C0404] text-white">ADVANCE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="text-left">
                <td className="px-6 py-4 font-bold">{row.noHeader}</td>
                {[row.column0, row.column1, row.column2, row.column3].map((col, idx) => (
                  <td key={idx} className="px-6 py-4 text-center text-[#36454F] whitespace-normal w-[300px]">
                    {col.split(', ').map((item, idx2) => (
                      <p key={idx2}>{item}</p>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4" data-aos="fade-up">
          <h3 className="text-2xl font-extrabold mb-4 md:text-3xl text-[#1D2B53]">Notes</h3>
          <ul className="list-outside hover:list-inside">
            <li className="my-2">Spreads are variable and may widen during high volatility.</li>
            <li className="my-2">Leverage is adjusted based on deposit size and trading volume.</li>
            <li className="my-2">Refer to full trading terms & conditions for complete info.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TradingTable;
