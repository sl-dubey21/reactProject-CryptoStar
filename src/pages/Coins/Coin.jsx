import React, { useContext, useEffect, useState } from 'react'
import "./Coin.css"
// useparams se hame id mil jayegi coin ki 
import { useParams } from 'react-router-dom'
import { Coincontext } from '../../context/Coincontext';
import LineChart from '../../components/LineChart/LineChart';
const Coin = () => {

  const {coinId}=useParams();
  const [coinData,setCoinData]=useState();
  const [HistoricalData,setHistoricalData]=useState();
  const {currency}=useContext(Coincontext);


  const fetchCoinData=async function(){
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ddcT1qeAdHnRJk1fgYWtk4dh'}
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
  }


  const fetchHistoricalData=async function(){
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ddcT1qeAdHnRJk1fgYWtk4dh'}
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
    }


  useEffect(()=>{
    fetchCoinData();
    fetchHistoricalData();
  },[currency]);

  if(coinData && HistoricalData){
    return (
      <div className='Coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p><b>{coinData.name}({coinData.symbol.toUpperCase()}) </b></p>
        </div>
        <div className="coin-chart">
          <LineChart HistoricalData={HistoricalData}/>
        </div>

        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank : {coinData.market_cap_rank}</li>
            <li>Current Price : {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
            <li>Market Cap : {currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
            <li>24 Hour High  : {currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
            <li>24 Hour Low : {currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>

      </div>
    )
  }else{
    return (
      <div className="spinner">
        <div className="spin"> </div>
      </div>
    )
    
  }
}

export default Coin
