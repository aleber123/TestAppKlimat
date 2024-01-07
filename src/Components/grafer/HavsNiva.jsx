import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const HavsNiva = () => {
  const [data, setData] = useState([]);
  // useState för att hantera den hämtade datan
   // useEffect används för att hämta data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0');
        const result = await response.json();
        console.log(result); // Logga result för att se API-svaret

        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    // Rendera linjediagramkomponenten med Recharts
    <div style={{ backgroundColor: '#FDFAF2' }}>
      <LineChart width={530} height={350} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Time" />
        <YAxis dataKey="GMSL" domain={['auto', 'auto']} />
        <Line type="monotone" dataKey="GMSL" stroke="#304742" strokeWidth={2} dot={false} />
      </LineChart>
    </div>
  );
};

export default HavsNiva;
