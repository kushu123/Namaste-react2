import RestCards from "./RestCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Body =() =>{
const [listOfRestaurants, setListOfRestaurants] = useState([]);
const [btnNameReact, setBtnNameReact] = useState("Top Rated Restaurants");
const [searchText, setSearchText] = useState("");
const [filteredRestaurant , setFilteredRestaurant] = useState([]);

useEffect(() => {
  fetchData();
}, []);

const fetchData =  async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  console.log(json);

  //Optional Chaining
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

//Conditional rendering
    
    return listOfRestaurants.length === 0 ? <Shimmer/>: (
    <div className="body">
      <div className ="filter">
        <div className="search">
          <input type="text" placeholder="What are you looking for?" className="search-box" value={searchText} 
          onChange = {(e) =>{
            setSearchText(e.target.value);
          }}/>
          <button type="submit" className="searchButton" onClick = {() => {
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
         className ="filter-btn" 
         onClick = {() => {
          btnNameReact === "Top Rated Restaurants"? setBtnNameReact("See All Restaurants") : setBtnNameReact("Top Rated Restaurants");
          if(btnNameReact == "Top Rated Restaurants"){
            filteredList = listOfRestaurants.filter(
            (res) =>  res.info.avgRating > 4.2
          );
          }
          else{
            filteredList = listOfRestaurants;
          }
          setFilteredRestaurant(filteredList);
        }}
        >
          <b>{btnNameReact}</b></button>      
        </div>
      <div className ="rest-container">
     {
       filteredRestaurant.map((restaurant) => (
        <RestCards key={restaurant.info.id} restData={restaurant}/>
       ))}
      </div>
    </div>
    )
  };

  export default Body;