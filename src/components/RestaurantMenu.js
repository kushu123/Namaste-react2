import Shimmer_Menu from "./Shimmer_Menu";
import { useParams } from "react-router-dom";
import { MENU_PIC_URL } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import useRestaurantMenu  from '../utils/useRestaurantMenu';
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () =>{ 

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex ] = useState(null);
    
        if(resInfo === null) return <Shimmer_Menu />

        const {name, cuisines, costForTwoMessage, avgRating, sla } = resInfo?.cards[2]?.card?.card?.info;

        const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;   
        console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
            ) 
        
            //console.log(categories);

    return (
        <div className = "text-center">
        <div className="text-center bg-gradient-to-r from-white via-red-300 to-red-400 w-3/5 m-auto px-4 pb-4 rounded-3xl">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <div className="font-bold text-lg">
            <h3 className="res-rating"> <FontAwesomeIcon icon={faStar} /> {avgRating} - {costForTwoMessage}</h3>
            <h3 className="res-rating">{cuisines.join(", ")}</h3>
            <h3 className="res-rating">{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</h3>
            </div>
        </div>
        <div className="mt-6">
        {categories.map((category, index) => (
                <RestaurantCategory 
                key={category.card.card} 
                data = {category?.card?.card}
                showItems = {index === showIndex ? true : false}
                setShowIndex = {() =>  setShowIndex(index)}
                />
            ))}
            </div>
        </div>
        
    )};

    export default RestaurantMenu;