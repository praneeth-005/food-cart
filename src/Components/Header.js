import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import './Header.css'
import { Link } from "react-router";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">    
                <Link to="/">
                    <img alt="logo" className="logo" src={LOGO_URL} />
                </Link>
            </div>
           

            <div className="nav-items">
                 <button className="log-btn" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>
                    {btnName}
                 </button>
                <ul>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                </ul>
                
            </div>
        </div>
    )
}
export default Header;