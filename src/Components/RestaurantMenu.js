import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantManu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(itemCards);


    return(
        <>
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            {itemCards?.map((items) => (<li key={items?.card?.info?.id}>{items?.card?.info?.name} - {"Rs."} {items?.card?.info?.price / 100 || items?.card?.info?.defaultPrice / 100}</li>))}
        </>
        
    )
}
export default RestaurantManu;