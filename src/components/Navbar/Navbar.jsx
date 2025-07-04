import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Coincontext } from "../../context/Coincontext"; // ✅ Import context

const Navbar = () => {

  const { setCurrency } = useContext(Coincontext); // ✅ Use context

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <>
      <div className="Nav">
        <div className="nav-left">
          <Link to={'/'}><h2><i className="fa-solid fa-bitcoin-sign"></i>CryptoStar</h2></Link>
        </div>
        <div className="nav-links">
          <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/pricing'}><li>Pricing</li></Link>
            <Link to={'/features'}><li>Features</li></Link>
          </ul>
        </div>
        <div className="nav-right">
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EURO</option>
            <option value="inr">INR</option>
          </select>
          <button>Signup <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
