import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Forex = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [data, setData] = useState([]);
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    const fetchForexData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/management/intraday/`); // Adjust the URL as needed
        const timeSeries = response.data['Time Series (5min)'];

        // Extract meta data
        const meta = response.data['Meta Data'];
        setMetaData({
          symbol: meta['2. Symbol'],
          timeZone: meta['6. Time Zone'],
        });

        // Filter out only necessary data
        const formattedData = Object.entries(timeSeries).map(([key, value]) => ({
          open: parseFloat(value['1. open']),
          high: parseFloat(value['2. high']),
          low: parseFloat(value['3. low']),
          close: parseFloat(value['4. close']),
          volume: parseInt(value['5. volume']),
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching forex data:', error);
      }
    };

    fetchForexData();
  }, []);

  return (
    <div>
      
      <div>
        <strong>{metaData.symbol}</strong> 
      </div>
      <div>
        <strong>Time Zone</strong> {metaData.timeZone}
      </div>
      <table>
        <thead>
          <tr className='text-red-500'>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.open.toFixed(2)}</td>
              <td style={{ color: 'green' }}>{item.high.toFixed(2)}</td>
              <td style={{ color: 'red' }}>{item.low.toFixed(2)}</td>
              <td>{item.close.toFixed(2)}</td>
              <td style={{ color: 'purple' }}>{item.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Forex;
