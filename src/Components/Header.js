import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import './Header.css'
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

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
                <ul className="nav-container">
                    <li>
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                       <Link className="nav" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="nav" to="/contact">Contact Us</Link>
                    </li>

                </ul>
                
            </div>
        </div>
    )
}
export default Header;