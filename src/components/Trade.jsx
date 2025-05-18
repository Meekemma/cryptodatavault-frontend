import React, { useContext, useEffect } from 'react';
import TradePlan from './TradePlan';
import '../styles/CustomCarousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';

// Crypto icons
import tether from '../assets/images/tether.svg';
import ethereum from '../assets/images/ethereum.png';
import litecoin from '../assets/images/litecoin.svg';
import solana from '../assets/images/solana.svg';
import bitcoin from '../assets/images/bitcoin.png';
import xrp from '../assets/images/xrp.svg';
import usd from '../assets/images/usd.svg';
import bnb from '../assets/images/bnb.svg';

// Payment icons
import Mastercard from '../assets/images/Mastercard.svg';
import paypal from '../assets/images/paypal.svg';
import visa from '../assets/images/visa.svg';
import bank from '../assets/images/bank.svg';
import unionpay from '../assets/images/unionpay.svg';

// Context
import CryptoContext from '../context/CryptoContext';

const Trade = () => {
    const { markets } = useContext(CryptoContext);
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleOnClick = () =>{
        if(user){
            toast.error("You already have an account");
        }else{
            navigate('/signup')
        }
    }


    // Initialize AOS (Animate On Scroll) library
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="container mx-auto px-4">
            {/* Market Section */}
            <div className="flex justify-center">
                <div className="text-center markets" data-aos="fade-up">
                    <h3 className="text-3xl font-extrabold md:text-balance">
                        Trade the world’s market with Trexiz LTD
                    </h3>
                    <p className="mt-2">
                        We offer 300+ instruments under 7 asset classes of world-renowned markets.
                    </p>
                </div>
            </div>

            {/* Scrolling Markets */}
            <div className="overflow-hidden relative border border-gray-300 rounded-lg mt-4">
                <div className="flex animate-scroll">
                    {Array.isArray(markets) && markets.length > 0 ? (
                        markets.slice(0, 30).map((market) => (
                            <div key={market.id} className="flex-shrink-0 mx-4 my-2">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={market.image}
                                    alt={market.name}
                                />
                                <div className="mt-2">
                                    <div className="text-sm font-medium text-gray-900">{market.name}</div>
                                    <div className="text-sm text-gray-500">
                                        ${market.current_price.toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 p-4">Loading markets...</p>
                    )}
                </div>
            </div>

            {/* Trading Account Types Section */}
            <div className="text-center mt-4 trade" data-aos="fade-up">
                <h3 className="text-4xl font-extrabold text-wrap md:text-balance">
                    Trading Account Types
                </h3>
                <p className="mt-2">
                    With our 3 types of trading accounts, you will find the complete flexibility to trade at the level you want.
                </p>
                <div>
                    <TradePlan />
                </div>
            </div>

            {/* Deposit and Withdrawal Section */}
            <div className="mt-8" data-aos="fade-up">
                <div className="text-center">
                    <h4 className="text-4xl font-extrabold text-wrap md:text-balance">
                        Instant deposit and withdrawal
                    </h4>
                    <p className="mt-2">With cryptocurrency & stable coin.</p>

                    {/* Crypto Icons */}
                    <div className="cryptos">
                        <img src={ethereum} alt="Ethereum" />
                        <img src={bitcoin} alt="Bitcoin" />
                        <img src={tether} alt="Tether" />
                        <img src={solana} alt="Solana" />
                        <img src={litecoin} alt="Litecoin" />
                        <img src={xrp} alt="xrp" />
                        <img src={usd} alt="usd" />
                        <img src={bnb} alt="bnb" />
                    </div>

                    {/* Payment Icons */}
                    <div className="cryptos mt-6">
                        <img src={Mastercard} alt="Mastercard" />
                        <img src={paypal} alt="Paypal" />
                        <img src={visa} alt="Visa" />
                        <img src={bank} alt="Bank" />
                        <img src={unionpay} alt="Unionpay" />
                    </div>

                    {/* Create Account Button */}
                    <div className="mt-6">
                        <button className="create-button" onClick={handleOnClick}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trade;
