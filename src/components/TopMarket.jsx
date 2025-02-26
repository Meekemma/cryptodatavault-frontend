import React, { useContext } from 'react';
import CryptoContext from '../context/CryptoContext';

const TopMarket = () => {
    const { markets } = useContext(CryptoContext);

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-2">
                {/* First Card: Crypto Calculator */}
                <div className="order-first w-full md:w-1/2 p-6 card bg-[#1D2B53] rounded-lg shadow-md text-white">
                    <h2 className="text-2xl font-bold text-green-500 mb-4">Crypto Calculator</h2>
                    {/* Add your crypto calculator form here */}
                    <div className="flex flex-col space-y-4">
                        <input
                            type="number"
                            placeholder="Enter amount"
                            className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
                        />
                        <select className="p-2 rounded-md bg-gray-800 text-white">
                            {/* Add options for different cryptocurrencies */}
                            <option>Bitcoin</option>
                            <option>Ethereum</option>
                            <option>Litecoin</option>
                        </select>
                        <button className="p-2 rounded-md bg-blue-600 hover:bg-blue-500">
                            Calculate
                        </button>
                    </div>
                </div>

                {/* Second Card: Top 10 Cryptocurrencies */}
                <div className="order-last w-full md:w-1/2 p-6 card bg-[#1D2B53] rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-green-500">Top 10 Cryptocurrencies</h2>
                    <table className="min-w-full">
                        <tbody>
                            {markets.slice(0, 10).map((market) => (
                                <tr key={market.id} className="hover:bg-gray-700 transition">
                                    <td className="px-2 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img className="w-6 h-6 rounded-full" src={market.image} alt={market.name} />
                                            <div className="ml-2">
                                                <div className="text-sm font-medium text-white">{market.name}</div>
                                                <div className="text-sm text-gray-400">{market.symbol.toUpperCase()}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 whitespace-nowrap text-sm text-green-500">
                                        ${market.current_price.toLocaleString()}
                                    </td>
                                    <td className="px-2 py-2 whitespace-nowrap text-sm text-red-500">
                                        ${market.high_24h.toLocaleString()}
                                    </td>
                                    <td className="px-2 py-2 whitespace-nowrap text-sm text-red-500">
                                        ${market.low_24h.toLocaleString()}
                                    </td>
                                    <td className="px-2 py-2 whitespace-nowrap text-sm text-red-500">
                                        {market.price_change_percentage_24h.toFixed(2)}%
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TopMarket;
