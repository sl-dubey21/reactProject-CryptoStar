import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Coincontext } from '../../context/Coincontext.jsx'
import { Link } from 'react-router-dom'

const Home = () => {

    const {setCurrency}=useContext(Coincontext)


    const {allCoins,currency}=useContext(Coincontext)
    const [displayCoins,setDisplayCoins]=useState([]);
    const [input,setInput]=useState("");

    const handleInputChange=(event)=>{
        setInput(event.target.value);    
        if(event.target.value===""){
            setDisplayCoins(allCoins);
        }
    }

    const searchHandler= async (event)=>{
        event.preventDefault();
        if(input.trim() === "") {
            setDisplayCoins(allCoins);
            return;
        }
        const coins=await allCoins.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoins(coins);

    }

    useEffect(()=>{
        setDisplayCoins(allCoins);
    },[allCoins])
     
    return (
        <div className='Home'>
            <div className="hero">
                <h1>Best <br /> Crypto MarketPlace</h1>
                <p>Welcome to the World's best CryptoCurrency MarketPlace. Sign up to explore more about Cryptos.</p>
                <form onSubmit={searchHandler} >
                    <input onChange={handleInputChange} list='coinlist' value={input} type="text" placeholder='Search Crypto ...'  required/>

                    <datalist id="coinlist">
                        {allCoins.map((item,index)=>
                            (<option key={index} value={item.name}/>)
                        )}
                    </datalist>

                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="crypto-table">
                <div className="table">
                    <p style={{textAlign:"left"}}>Ranking</p>
                    <p style={{textAlign:"center"}}>Coin Name</p>
                    <p>Price</p>
                    <p style={{textAlign:"center"}}>24H Change</p>
                    <p style={{textAlign:"right"}}>Market Cap</p> 
                </div>
                {
                    displayCoins.slice(0,10).map((item,index)=>(
                        <Link to={`/coin/${item.id}`} className="table" key={index}>
                            <p style={{textAlign:"center"}}>{item.market_cap_rank}</p>
                            <div className='coin-image'>
                                <img src={item.image} alt=""  style={{textAlign:"center"}}/>
                                <p>{item.name+" - "+item.symbol}</p>

                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()} </p>
                            <p className={item.price_change_percentage_24h>0?"green":"red"} style={{textAlign:"center"}}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                            <p style={{textAlign:"right"}}>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
