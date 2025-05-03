import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../utils/axiosInstance';
import DashBoardFooter from './DashBoardFooter';
import bank from '../assets/images/bank.svg';
import paypal from '../assets/images/paypal.svg';
import visa from '../assets/images/visa.svg';
import banktransfer from '../assets/images/bank_transfer.svg';
import unionpay from '../assets/images/unionpay.svg';
import mastercard from '../assets/images/Mastercard.svg';
import westernunion from '../assets/images/western-union.svg';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [formData, setFormData] = useState({
        plan: '',
        amount_paid: '',
        currency: 'BTC',
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const plans = [
        { value: 'starter', label: 'Starter Plan' },
        { value: 'standard', label: 'Standard Plan' },
        { value: 'advanced', label: 'Advance Plan' }
    ];

    const currencies = [
        { value: 'BTC', label: 'BTC' },
        { value: 'XRP', label: 'XRP' },
        { value: 'USDT', label: 'USDT' },
        { value: 'USD', label: 'USD' },
    ];

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formattedAmount = parseFloat(formData.amount_paid).toFixed(8);

            await axiosInstance.post('/payment/create_payment/', {
                ...formData,
                amount_paid: formattedAmount
            });

            navigate('/complete_payment');

            setFormData({
                plan: '',
                amount_paid: '',
                currency: 'BTC',
            });
        } catch (error) {
            console.error("Error Response:", error.response?.data || error.message);
            if (error.response?.data) {
                Object.values(error.response.data).forEach((errMsg) => {
                    if (Array.isArray(errMsg)) {
                        errMsg.forEach((msg) => toast.error(msg));
                    } else {
                        toast.error(errMsg);
                    }
                });
            } else {
                toast.error("An error occurred. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Form Container */}
            <div className='mx-auto flex flex-col justify-center items-center min-h-screen mt-10 md:mt-20 mb-2'>
                <div className="bg-[#FFF5EE] p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-center text-2xl font-bold mb-6">Make a Payment</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="plan" className="block font-semibold mb-2">Select Plan:</label>
                            <select
                                id="plan"
                                value={formData.plan}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            >
                                <option value="">Choose a plan</option>
                                {plans.map((plan) => (
                                    <option key={plan.value} value={plan.value}>{plan.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="amount_paid" className="block font-semibold mb-2">Amount:</label>
                            <input
                                type="number"
                                step="0.00000001"
                                id="amount_paid"
                                value={formData.amount_paid}
                                onChange={handleChange}
                                placeholder="Enter Amount"
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="currency" className="block font-semibold mb-2">Currency:</label>
                            <select
                                id="currency"
                                value={formData.currency}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            >
                                <option value="">Choose currency</option>
                                {currencies.map((currency) => (
                                    <option key={currency.value} value={currency.value}>{currency.label}</option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#1D2B53] text-white py-2 rounded-full hover:bg-[#4A4A4A] transition-colors"
                            disabled={isLoading}
                        >
                            {isLoading ? "Processing..." : "Process Payment"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Depositor Notes Section */}
            <div className='container mx-auto px-4 mb-10'>
                <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                    <h3 className='text-lg font-semibold mb-2'>Note for Depositors:</h3>
                    <ul className='list-disc list-inside mt-2 text-gray-700'>
                        <li><strong>Correct Information:</strong> Double-check your currency selection and email address.</li>
                        <li><strong>Transaction Time:</strong> Deposits may take up to 24 hours to reflect.</li>
                        <li><strong>Fees and Limits:</strong> Be aware of transaction fees or limits.</li>
                        <li><strong>Security:</strong> Ensure your connection is secure.</li>
                    </ul>
                    <p className='text-gray-700 mt-4'>
                        For assistance, contact <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
                    </p>
                </div>
            </div>

            {/* Payment Methods Section */}
            <div className='container mx-auto px-4 my-6'>
                <h1 className='text-center font-bold text-lg mb-6'>We Also Accept</h1>
                <div className='flex gap-4 flex-wrap justify-center items-center'>
                    <img src={paypal} alt="paypal" className='w-16 h-auto' />
                    <img src={visa} alt="visa" className='w-16 h-auto' />
                    <img src={mastercard} alt="mastercard" className='w-16 h-auto' />
                    <img src={westernunion} alt="western-union" className='w-20 h-auto' />
                    <img src={bank} alt="bank" className='w-16 h-auto' />
                    <img src={banktransfer} alt="bank transfer" className='w-16 h-auto' />
                    <img src={unionpay} alt="unionpay" className='w-16 h-auto' />
                </div>
            </div>

            <DashBoardFooter />
        </>
    );
};

export default Payment;
