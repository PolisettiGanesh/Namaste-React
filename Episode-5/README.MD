Later you work with cloudinary image id for dynamic images
      - create constants.jsx file
            - add CDN_URL
            - add LOGO_URL


 Types of Exports
    1. Default
    2.Named
-----------------------------------------------------------------------------
// Lets work with dynamic data
    1. Replace Search feature with Filter btn and style it using css
    2. then add to that button event handler onClick and check it on console

import RestaurantCard from "./RestaurantCard";
import RestList from "../utils/mockData";
const Body = () => {
   return (
      <div className="body">
         <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            console.log("Button clicked !");
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
----------------------------------------------------
import RestaurantCard from "./RestaurantCard";
// import RestList from "../utils/mockData";
const Body = () => {
  let  RestList = [
  {
    RestaurantName: "Subbaih",
    id: "312456",
    name: "Domino's Pizza",
    cloudinaryImageId: "mvpqjyk6x08aje3kjlhs",
    locality: "ITKI Road",
    areaName: "Ratu",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.1
  },
  {
    RestaurantName: "Lingaih",
    id: "80228",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Nucleus Mall",
    areaName: "Lalpur",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 3.6
  },
  {
    RestaurantName: "Ramesh",
    id: "100123",
    name: "KFC",
    cloudinaryImageId: "v1636204325/kfc-image.jpg",
    locality: "Main Road",
    areaName: "Hinjewadi",
    costForTwo: "₹500 for two",
    cuisines: ["Burgers", "Fast Food", "Snacks"],
    avgRating: 4.2
  },
]
   return (
      <div className="body">
         <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
          RestList =RestList.filter((res)=>{
               return  res.avgRating>4;
          })
          console.log(RestList);
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

 Note:   Here the Ui is not updating so here comes Hook concept
 -----
----------------------------------------------------------------------------
                       ## React Hooks
          - (Normal Js utility functions)
                 - useState()  - super powerful state variable in react
                 - useEffect()
 - useState is a named export which is present in the react library
 - useState = local state variable

Ex:
---
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

const [RestList,setRestList] = useState([
  {
    RestaurantName: "Subbaih",
    id: "312456",
    name: "Domino's Pizza",
    cloudinaryImageId: "mvpqjyk6x08aje3kjlhs",
    locality: "ITKI Road",
    areaName: "Ratu",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.1
  },
  {
    RestaurantName: "Lingaih",
    id: "80228",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Nucleus Mall",
    areaName: "Lalpur",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 3.6
  },
  {
    RestaurantName: "Ramesh",
    id: "100123",
    name: "KFC",
    cloudinaryImageId: "v1636204325/kfc-image.jpg",
    locality: "Main Road",
    areaName: "Hinjewadi",
    costForTwo: "₹500 for two",
    cuisines: ["Burgers", "Fast Food", "Snacks"],
    avgRating: 4.2
  },
])
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
------------------------------------------------------
Ex:2
-----
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../utils/mockData";

const Body = () => {
const arr =  useState(restList);
const [RestList,setRestList] =arr;
// const [RestList,setRestList] = useState(restList);
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
