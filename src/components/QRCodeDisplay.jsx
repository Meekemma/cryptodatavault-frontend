import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import DashBoardFooter from './DashBoardFooter';
import { ClipLoader } from 'react-spinners';

const QRCodeDisplay = () => {
    const [qrCode, setQrCode] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [showProceed, setShowProceed] = useState(false); // State to control button visibility

    useEffect(() => {
        const fetchQRCode = async () => {
            try {
                const response = await axiosInstance.get("/payment/qr-code/", {
                    responseType: "blob",
                });

                const imageUrl = URL.createObjectURL(response.data);
                setQrCode(imageUrl); 
            } catch (err) {
                setError('Failed to load QR Code. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchQRCode();

        // Show "Proceed" button after 60 seconds
        const proceedTimer = setTimeout(() => {
            setShowProceed(true);
        }, 60000);

        return () => clearTimeout(proceedTimer); // Cleanup timer
    }, []);

    const handleProceedToProcessing = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            window.location.href = '/transactions'; // Redirect after 10 sec
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
                        <img src={qrCode} alt="QR Code" className="w-64 h-64" />
                        <p className="mt-2 text-gray-700">Scan to complete your payment</p>

                        {/* Show button only after 60 seconds */}
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

            {/* Overlay when processing */}
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
