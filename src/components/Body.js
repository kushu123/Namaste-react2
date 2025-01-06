import RestCards, { withPromotedLabel } from "./RestCards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestCards";
import UserContext from "../utils/UserContext";


const Body =() =>{
const [listOfRestaurants, setListOfRestaurants] = useState([]);
const [btnNameReact, setBtnNameReact] = useState("Top Rated Restaurants");
const [searchText, setSearchText] = useState("");
const [filteredRestaurant , setFilteredRestaurant] = useState([]);

const RestraunCardPromoted = withPromotedLabel(RestCards);

console.log(listOfRestaurants);

useEffect(() => {
  fetchData();
}, []);


const fetchData =  async () => {
  const data = await fetch(
    'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  );

  const json = await data.json();
  console.log(json);

  //Optional Chaining
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

const  onlineStatus  = useOnlineStatus();

 if(onlineStatus === false)
  return (
   <div class="error-container"> 
   <h1 className="error-containerh1"> ERROR ❌</h1> 
   <p className="error-containerp"> 
    Oops! It seems like you're offline. 
    Please check your internet connection and try again.. 
   </p> 
</div> 
  );
 const {loggedInUser, setUserName} = useContext(UserContext);
//Conditional rendering
    
return listOfRestaurants.length === 0 ? <Shimmer/>: (
  <div className="body">
    <div className="filter">
      <div className="m-4 p-4 flex items-center justify-between">
        <div className="flex">
          <input 
            type="text" 
            id="simple-search" 
            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 ps-8 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="What are you looking for..." 
            required 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
            type="submit" 
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <button 
          className="p-2.5 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" 
          onClick={() => {
            btnNameReact === "Top Rated Restaurants" ? setBtnNameReact("See All Restaurants") : setBtnNameReact("Top Rated Restaurants");
            if(btnNameReact === "Top Rated Restaurants") {
              filteredList = listOfRestaurants.filter(
                (res) =>  res.info.avgRating > 4.2
              );
            } else {
              filteredList = listOfRestaurants;
            }
            setFilteredRestaurant(filteredList);
          }}
        >
          <b>{btnNameReact}</b>
        </button>      
        <div>
        <div class="w-72">
  <div class="relative w-full min-w-[200px] h-10">
    <input
      class="border-gray-400 peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " value={loggedInUser} onChange={(e) => setUserName(e.target.value)}
      />
    <label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t before:border-blue-gray-200 peer-focus:before:border-t-2 peer-focus:before:border-gray-900 before:border-l before:border-blue-gray-200 peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t after:border-blue-gray-200 peer-focus:after:border-t-2 peer-focus:after:border-gray-900 after:border-r after:border-blue-gray-200 peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900">Username
    </label>
  </div>
</div>

        </div>
      </div>
    </div>
    <div className="flex flex-wrap">
      {filteredRestaurant.map((restaurant) => (
        <Link className="link-container" key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}
        >{restaurant.info.isOpen ? (
          <RestraunCardPromoted restData={restaurant}/>
        ) : (
          <RestCards restData={restaurant}/>
        )
        }
        </Link>
      ))}
    </div>
  </div>
);

  };

  export default Body;