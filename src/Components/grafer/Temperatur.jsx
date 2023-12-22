import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Temperatur = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my.api.mockaroo.com/temp.json?key=8eb9e6f0');
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
      <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeLinecap="3 3" />
        <XAxis dataKey="Year" domain={['dataMin', 'dataMax']} reversed={true} /> {/* reversed sätts till true */}
        <YAxis type="number" domain={['auto', 'auto']} />
        <Line type="monotone" dataKey="Mean" stroke="#304742" trokeWidth={2}
          dot={false} />
      </LineChart>
    </div>
  );
};

export default Temperatur;
