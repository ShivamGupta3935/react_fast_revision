import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    console.log("data is",data);
    
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      console.log(data);
      
    },[currency])
    // console.log(data.keys());    
    return data
}

export default useCurrencyInfo;

