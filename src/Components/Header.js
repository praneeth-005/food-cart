import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import './Header.css'
const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">    
                <img alt="logo" className="logo" src={LOGO_URL} />
            </div>
           

            <div className="nav-items">
                 <button className="log-btn" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>
                    {btnName}
                 </button>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                
            </div>
        </div>
    )
}
export default Header;