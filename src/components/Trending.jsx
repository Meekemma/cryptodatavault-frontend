import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/trending.css'; // Make sure to include this CSS file

const Trending = () => {
    const [trends, setTrends] = useState({
        coins: [],
        nfts: [],
        categories: []
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrends = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/management/trending/');
                setTrends(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        };
        fetchTrends();
    }, []);

    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div className='c mx-auto my-8'>
            <div className="trending-container">
                <div className="card-trend">
                    <h2>Trending Coins</h2>
                    <div className="scrollable-content">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Price</th>
                                    <th>24h</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trends.coins.map((coin) => (
                                    <tr key={coin.item.id}>
                                        <td>
                                          <img src={coin.item.thumb} alt={coin.item.name} width={30} height={30} />
                                        </td>
                                        <td>{coin.item.name}</td>
                                        <td>${coin.item.data.price}</td>
                                        <td>{coin.item.data.price_change_percentage_24h.usd}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card-trend">
                    <h2>Trending NFTs</h2>
                    <div className="scrollable-content">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Price</th>
                                    <th>24h</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trends.nfts.map((nft) => (
                                    <tr key={nft.id}>
                                       <td>
                                          <img src={nft.thumb} alt={nft.name} width={30} height={30} />
                                        </td>
                                        <td>{nft.name}</td>
                                        <td>{nft.data.floor_price}</td>
                                        <td>{nft.floor_price_24h_percentage_change}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card-trend">
                    <h2>Categories</h2>
                    <div className="scrollable-content">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Last 7 Days</th>
                                    <th>1h</th>
                                    <th>Total Volume</th>
                                    <th>Market Cap</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {trends.categories.map((category) => (
                                    <tr key={category.id}>
                                        <td>{category.name}</td>
                                        <td><img src={category.data.sparkline} alt={category.name} /></td>
                                        <td>{category.market_cap_1h_change}%</td>
                                        <td>${category.data.total_volume.toLocaleString()}</td>
                                        <td>${category.data.market_cap.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;
