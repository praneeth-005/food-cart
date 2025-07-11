import { useEffect, useState } from "react"
import { RESTAURANTMENU } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData(); 
    }, []);

    const fetchData = async() => {
        const data = await fetch( RESTAURANTMENU + resId );
        const json = await data.json();
        setResInfo(json);
    }
    return resInfo;
}
export default useRestaurantMenu;