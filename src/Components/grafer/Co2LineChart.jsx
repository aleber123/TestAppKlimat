import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Co2Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my.api.mockaroo.com/co2.json?key=8eb9e6f0');
        const result = await response.json();
        
        // Filtrera data för att bara inkludera år mellan 1900 och 2014
        const filteredData = result.filter(item => item.Year >= 1900 && item.Year <= 2014);

        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{backgroundColor:'#FDFAF2'}}>
      <LineChart width={530} height={350} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis type="Total" domain={['auto', 'auto']} /> {/* skalar upp yaxel efter behov */}
        <Line type="monotone" dataKey="Total" stroke="#304742" trokeWidth={2}
          dot={false} /> 
      </LineChart>
    </div>
  );
};

export default Co2Chart;
