import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const CryptoContext = createContext();
export default CryptoContext;

export const CryptoContextProvider = ({ children }) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const [markets, setMarkets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cachedData = localStorage.getItem('marketsData');
        const cachedTimestamp = localStorage.getItem('marketsDataTimestamp');
        const now = Date.now();

        if (cachedData && cachedTimestamp && now - cachedTimestamp < CACHE_DURATION) {
            const parsedData = JSON.parse(cachedData);
            const duplicatedData = [...parsedData, ...parsedData.map((market) => ({
                ...market,
                id: `${market.id}-duplicate`, // Ensure unique keys
            }))];

            setMarkets(duplicatedData);
            setLoading(false);
        } else {
            const fetchMarkets = async () => {
                try {
                    const response = await axios.get(`${BASE_URL}/management/get_currency/`);
                    const originalData = response.data;

                    const duplicatedData = [...originalData, ...originalData.map((market) => ({
                        ...market,
                        id: `${market.id}-duplicate`, // Ensure unique keys
                    }))];

                    setMarkets(duplicatedData);
                    localStorage.setItem('marketsData', JSON.stringify(originalData));
                    localStorage.setItem('marketsDataTimestamp', now.toString());
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchMarkets();
        }
    }, [BASE_URL]); // Ensures re-fetching when BASE_URL changes

    return (
        <CryptoContext.Provider value={{ markets, loading, error }}>
            {children}
        </CryptoContext.Provider>
    );
};
