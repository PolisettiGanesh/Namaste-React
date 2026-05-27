import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../utils/mockData";

const Body = () => {

const [RestList,setRestList] = useState(restList);
   return (
      <div className="body">
         <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
          const filteredList = RestList.filter((res)=>{
               return  res.avgRating>4;
          })
            setRestList(filteredList)
          }}
          >Top Rated Restaurants</button>
         </div>
         <div className="res-container">
            {RestList.map((restaurant) => (
               <RestaurantCard key={restaurant.id} info={restaurant} />
            ))}
         </div>
      </div>
   );
};

export default Body;
