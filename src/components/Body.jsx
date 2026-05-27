import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';
import restList from '../utils/mockData';
import Shimmer from './Shimmer';


const Body = () => {
   const [RestList, setRestList] = useState([]);
   const[searchText,setSearchText] = useState("");
   const[filteredRestaurants,setFilteredRestaurants] = useState([]);

   useEffect(() => {
     fetchData();
   }, []);

  const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0356137&lng=77.5896209&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  );
  const json = await data.json();


  const restaurants = json?.data?.cards
    ?.map((c) => {
      if (c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant") {
        return c.card.card.info; // ✅ actual restaurant info
      }
      return null;
    })
    .filter(Boolean); // remove nulls

  setRestList(restaurants || []);
  setFilteredRestaurants(restaurants || []);
};


   return RestList.length===0 ? <Shimmer /> :(
      <div className="body">
         <div className="filter">
               <div className='seacrh'>
                <input type="text" className='searchBox' value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value);
                }} />
                <button onClick={()=>{
                  const filtered = RestList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase()) // 👈 filter by name
              );
              setFilteredRestaurants(filtered);
                 // console.log(searchText);
                }}>Search</button>
               </div>
            <button
               className="filter-btn"
               onClick={() => {
                  const filteredList = RestList.filter((res) => {
                     return res.avgRating > 4;
                  });
                  setRestList(filteredList);
               }}>
               Top Rated Restaurants
            </button>
         </div>
         <div className="res-container">
            {filteredRestaurants.map((restaurant,index) => (
               <RestaurantCard key={restaurant.id || index} info={restaurant} />
            ))}
         </div>
      </div>
   );
};

export default Body;
