import React from "react";
import './RestaurantCard.css';
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={ CDN_URL + resData?.info?.cloudinaryImageId} />
            <h3>{resData?.info?.name}</h3>
            <p>{resData?.info?.cuisines.join(",")}</p>
            <p>{resData?.info?.avgRating} Stars</p>
            <p>{resData?.info?.costForTwo}</p>
            <p>{resData?.info?.sla?.deliveryTime} minutes</p>
        </div>
    )
}
export default RestaurantCard;