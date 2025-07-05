import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import './Body.css';
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
             <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setListOfRestaurants(filteredList);
             }}>Top Rated Restaurant</button> 
            </div>
            <div className="res-container">
                {

                 listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant} />))

                } {/* passing props like this will actually wrap these properties around object and pass them to respective functional component */}
            </div>

        </div>
    )
}
export default Body;