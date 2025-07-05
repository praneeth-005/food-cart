import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import './Body.css';
import Shimmer from "./Shimmer";
import { SEARCH_LOGO } from "../utils/constants";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(()=>{
        fetchData(); 
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9926279&lng=81.814238&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search-container">
                <input className="search-txt" type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} />
                <img className="search-logo" src={SEARCH_LOGO} onClick={() => { 
                console.log(search) 
                const filteredRestaurant = listOfRestaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(search.toLowerCase()))
                setFilteredRestaurant(filteredRestaurant);
            } }/>
            </div>
             
            <div className="filter">
             <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setFilteredRestaurant(filteredList);
             }}>Top Rated Restaurant</button> 
            </div>
            <div className="res-container">
                {

                 filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant} />))

                } {/* passing props like this will actually wrap these properties around object and pass them to respective functional component */}
            </div>

        </div>
    )
}
export default Body;