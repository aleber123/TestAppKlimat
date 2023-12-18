import React, { useEffect, useState } from "react";
import '../style.css'
import { Co2LineChart } from "./Co2LineChart";
 
function Grafett() {
    const [co2data, setCo2data] = useState([]);
 
    useEffect(() => {
      setCo2data([]);
      const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0"; //do not forget to copy CO2EmissionsData.json to the public folder
     fetch(url)
        .then(data => data.json())
        .then(data => {
          setCo2data(data);
        });
    }, [])
  return (
    <>
    </>
  )
}
 
export default Grafett