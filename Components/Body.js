import React from "react";
import RestaurantCard from "./RestaurantCard";
import './Body.css';

const Body = () => {
    return(
        <div className="body">
            <div className="search-container">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>

        </div>
    )
}
export default Body;