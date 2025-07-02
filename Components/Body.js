import React from "react";
import RestaurantCard from "./RestaurantCard";
import './Body.css';

const Body = () => {
    return(
        <div className="body">
            <div className="search-container">Search</div>
            <div className="res-container">
                <RestaurantCard resName = "SriKanya" cuisine = "Briyani, Chinese, India" /> {/* passing props like this will actually wrap these properties around object and pass them to respective functional component */}
                <RestaurantCard resName = "Kfc" cuisine = "Fried-Chicken, Fast-Food" />
            </div>

        </div>
    )
}
export default Body;