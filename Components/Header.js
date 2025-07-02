import React from "react";
import './Header.css'
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">    
                <img alt="logo" className="logo" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStOvlrmnRCnGjrdAScJIv5KSvz1qYmGD4AH199pSb1A72m4Fum" />
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