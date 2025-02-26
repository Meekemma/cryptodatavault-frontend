import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';

const DashBoardBalance = () => {
    const [totalBonus, setTotalBonus] = useState('0.00');
    const [totalReferees, setTotalReferees] = useState(0);
    const [balance, setBalance] = useState('0.00'); 
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        const fetchReferralStats = async () => {
            try {
                const response = await axiosInstance.get(`/management/referrers/${user_id}/`);
                setTotalBonus(response.data.referrer_stats.total_bonus);
                setTotalReferees(response.data.referrer_stats.total_referees);
                console.log('Data', response.data.referrer_stats);
            } catch (error) {
                if (error.response) {
                    console.error(error.response.data);
                } else {
                    toast.error('An error occurred.');
                }
            }
        };

        const fetchBalance = async () => {
            try {
                const response = await axiosInstance.get('/payment/total_balance/');
                setBalance(response.data.balance); 
            } catch (error) {
                console.error(error); 
                toast.error('Failed to fetch balance.');
            }
        };

        const fetchData = async () => {
            await fetchReferralStats();
            await fetchBalance();
            setIsLoading(false);
        };

        fetchData();
    }, [user_id]);

    const handleMoreClick = () => {
        navigate('/referral-page'); 
    };

    

    return (
        <div className='flex flex-col md:flex-row gap-2 justify-between my-8'>
            <div className='card bg-[#1D2B53] p-4 rounded-lg shadow-lg flex-1 h-auto min-h-[200px] flex flex-col justify-between'>
                <div>
                    <h2 className='text-lg md:text-xl font-bold text-white'>Account Balance</h2>
                    <p className='text-xl md:text-2xl font-bold text-white'>BTC 0.000</p>
                </div>
                <div>
                    <p className='text-xl md:text-2xl font-bold text-white'>${balance}</p>
                </div>
            </div>
            <div className='card bg-[#1D2B53] p-4 rounded-lg shadow-lg flex-1 h-auto min-h-[200px] flex flex-col justify-between'>
                <div>
                    <h2 className='text-lg md:text-xl font-bold text-white'>Referrals</h2>
                    <div className='flex justify-between'>
                        <p className='text-xl md:text-2xl font-bold text-white'>{totalBonus}</p>
                        <p className='text-xl md:text-2xl font-bold text-white'>{totalReferees}/{totalReferees}</p>
                    </div>
                </div>
                <div className='flex justify-between items-end mt-4'>
                    <button onClick={handleMoreClick} className='text-white hover:underline'>
                        More
                    </button>
                </div>
            </div>
        </div>
    );
    
};

export default DashBoardBalance;
