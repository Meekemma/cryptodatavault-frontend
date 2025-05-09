import React, { useEffect, useState } from 'react';
import DashBoardFooter from './DashBoardFooter';
import { ClipLoader } from 'react-spinners';
import { QRCodeCanvas } from 'qrcode.react';
import { FiCopy, FiShare2 } from 'react-icons/fi';

const QRCodeDisplay = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [showProceed, setShowProceed] = useState(false);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const currency = localStorage.getItem('selectedCurrency'); // Changed from 'currency' to 'selectedCurrency'

        if (!currency) {
            setError("No currency selected. Please go back and choose a currency.");
            setIsLoading(false);
            return;
        }

        let address = '';
        if (currency === 'BTC') {
            address = 'bc1qj38z8sml7cwsgts67702y2l0sym86sxxxkddcf';
        } else if (currency === 'USDT') {
            address = '0x7D644b0B54B3Fce2f5D11cC5e31F2C93eD63570D';
        } else {
            address = 'COMING_SOON';
        }

        setWalletAddress(address);
        setIsLoading(false);

        const proceedTimer = setTimeout(() => {
            setShowProceed(true);
        }, 60000);

        return () => clearTimeout(proceedTimer);
    }, []);

    const handleProceedToProcessing = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            window.location.href = '/transactions';
        }, 10000);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                {isLoading ? (
                    <ClipLoader color="#1D2B53" size={50} />
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="p-4 bg-white shadow-md rounded-lg text-center">
                        <QRCodeCanvas value={walletAddress} size={256} />
                        <p className="mt-2 text-gray-700">Scan to complete your payment</p>

                        <div className="mt-2 flex items-center justify-center gap-2 flex-wrap">
                            <p className="text-gray-700 break-all">{walletAddress}</p>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(walletAddress);
                                    setCopied(true);
                                    setTimeout(() => setCopied(false), 2000);
                                }}
                                className="text-gray-500 hover:text-[#1D2B53] transition"
                                title="Copy address"
                            >
                                <FiCopy size={18} />
                            </button>
                            <button
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: 'Payment Address',
                                            text: `Here is the payment address: ${walletAddress}`,
                                        });
                                    } else {
                                        alert('Sharing not supported on this browser.');
                                    }
                                }}
                                className="text-gray-500 hover:text-[#1D2B53] transition"
                                title="Share address"
                            >
                                <FiShare2 size={18} />
                            </button>
                            {copied && <span className="text-sm text-green-600 ml-2">Copied!</span>}
                        </div>

                        {showProceed && (
                            <button
                                onClick={handleProceedToProcessing}
                                className="mt-4 bg-[#1D2B53] text-white py-2 px-6 rounded-lg hover:bg-[#4A4A4A] transition-colors"
                            >
                                Proceed
                            </button>
                        )}
                    </div>
                )}
            </div>

            {processing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <ClipLoader color="#1D2B53" size={50} />
                        <p className="mt-4 text-gray-700 font-semibold">
                            Kindly hold on for payment verification...
                        </p>
                    </div>
                </div>
            )}

            <DashBoardFooter />
        </>
    );
};

export default QRCodeDisplay;