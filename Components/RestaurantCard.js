import React from "react";
import './RestaurantCard.css';
const RestaurantCard = (props) => {
    console.log(props); 
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/da2592e0d25f079cbf9aedf436cabf6f" />
            <h3>{props.resName}</h3>
            <p>{props.cuisines}</p>
            <p>4.4 Stars</p>
            <p>38 minutes</p>
        </div>
    )
}
export default RestaurantCard;