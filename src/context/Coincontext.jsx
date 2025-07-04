import { createContext, useEffect, useState } from "react";

export const Coincontext=createContext();

const CoincontextProvider=(props)=>{
    const [allCoins,setallCoins]=useState([]);
    const [currency,setCurrency]=useState({
        name:"usd",
        symbol:"$"
    })
    const fetchAllcoin=async function(){
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ddcT1qeAdHnRJk1fgYWtk4dh'}
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setallCoins(res))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllcoin();
    },[currency])

    const contextvalue={
        allCoins,currency,setCurrency 
    }
    return (
        <Coincontext.Provider value={contextvalue}>
            {props.children}
        </Coincontext.Provider>
    )
}

export default CoincontextProvider;