import React, { useContext } from 'react';
import CryptoContext from '../context/CryptoContext';

const DashboardCurrency = () => {
    const { markets } = useContext(CryptoContext);

    return (
        <div className="overflow-x-auto md:overflow-visible">
            <div className="flex md:justify-between space-x-4 md:space-x-8">
                {markets.slice(0, 3).map((market, index) => (
                    <div 
                        key={index} 
                        className="card bg-[#1D2B53] p-4 md:p-6 rounded-lg shadow-lg 
                        w-[200px] sm:w-[250px] md:w-[400px] lg:w-[500px] 
                        h-[120px] md:h-[180px] flex flex-col items-center justify-center"
                    >
                        <h2 className="text-xs md:text-2xl font-bold text-white">
                            {market.symbol.charAt(0).toUpperCase() + market.symbol.slice(1)}
                        </h2>
                        <img className="w-6 md:w-16 h-6 md:h-16 rounded-full" src={market.image} alt={market.name} />
                        <p className="text-white text-xs md:text-xl font-bold">
                            ${market.current_price.toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardCurrency;
