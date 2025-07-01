import React from "react";
import './Header.css'
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">    
                <img alt="logo" className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?semt=ais_hybrid&w=740" />
            </div>

            <div className="nav-items">
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