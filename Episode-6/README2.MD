import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';
import restList from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {
   const [RestList, setRestList] = useState(restList);
   useEffect(() => {
      console.log('useEffect called !');
   }, []);
   console.log('Body component rendered');

   return (
      <div className="body">
         <div className="filter">
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
            {RestList.map((restaurant) => (
               <RestaurantCard key={restaurant.id} info={restaurant} />
            ))}
         </div>
      </div>
   );
};

export default Body;
----------------------------------------------------------------------------
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';
import restList from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {
   const [RestList, setRestList] = useState(restList);
   useEffect(() => {
     fetchData();
   }, []);


  const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0356137&lng=77.5896209&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  );
  const json = await data.json();

  // ✅ Pick only Restaurant type cards
  const restaurants = json?.data?.cards
    ?.map((c) => {
      if (c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant") {
        return c.card.card.info; // ✅ actual restaurant info
      }
      return null;
    })
    .filter(Boolean); // remove nulls

  setRestList(restaurants || []);
};


   return (
      <div className="body">
         <div className="filter">
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
            {RestList.map((restaurant,index) => (
               <RestaurantCard key={restaurant.id || index} info={restaurant} />
            ))}
         </div>
      </div>
   );
};

export default Body;
-------------------------------------------------------------------------
const Header = () => {
 let btnName ="LOGIN";
  return (
      <div className="header">
         <div className="logo-container">
            <img
               className="logo"
               src="https://static.startuptalky.com/2020/03/Swiggy_logo-1.png"
            />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
            <button className="login" onClick={()=>{
              btnName="LOGOUT";
              console.log(btnName);
            }}>{btnName}</button>
         </div>
      </div>
   );
};

export default Header;

    Note:    Here Ui is not Updating guys so useState variable we have to understand little bit more

---------------------------------------------------------------------
import { useState } from "react";

const Header = () => {

 const[btnName,setBtnName] = useState("LOGIN");
  return (
      <div className="header">
         <div className="logo-container">
            <img
               className="logo"
               src="https://static.startuptalky.com/2020/03/Swiggy_logo-1.png"
            />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
            <button className="login" onClick={()=>{
            setBtnName("LOGOUT")
            }}>{btnName}</button>
         </div>
      </div>
   );
};

export default Header;
--------------------------------
import { useState } from "react";

const Header = () => {

 const[btnName,setBtnName] = useState("LOGIN");
  return (
      <div className="header">
         <div className="logo-container">
            <img
               className="logo"
               src="https://static.startuptalky.com/2020/03/Swiggy_logo-1.png"
            />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
            <button className="login" onClick={()=>{
              btnName==="LOGIN"? setBtnName("LOGOUT"):setBtnName("LOGIN")
            }}>{btnName}</button>
         </div>
      </div>
   );
};

export default Header;
--------------------------------------------------------------------------
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';
import restList from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {
   const [RestList, setRestList] = useState([]);
   const[searchText,setSearchText] = useState("");

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
};


   return RestList.length===0 ? <Shimmer /> :(
      <div className="body">
         <div className="filter">
               <div className='seacrh'>
                <input type="text" className='searchBox' value={searchText}/>
                <button onClick={()=>{
                  console.log(searchText);
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
            {RestList.map((restaurant,index) => (
               <RestaurantCard key={restaurant.id || index} info={restaurant} />
            ))}
         </div>
      </div>
   );
};

export default Body;


Note: Here in input box the value is binded the useState variable to chnage this we need to work on onChange() event
----------------------------------------------------
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';
import restList from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {
   const [RestList, setRestList] = useState([]);
   const[searchText,setSearchText] = useState("");

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
              setRestList(filtered);
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
            {RestList.map((restaurant,index) => (
               <RestaurantCard key={restaurant.id || index} info={restaurant} />
            ))}
         </div>
      </div>
   );
};

export default Body;

Note: With this we got issue beacuse we got updating the original list when we filter it yupdates again we update it filters again from that filtered list with this thefre is a problem we have to overcome this
-------------------------------------------------------------------------
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

Note: here alos little bit problem when we render it nothing shows because our filtered restaurants is empty when we fetch api from live we have to set thgis for setFilteredList reatsurants
--------------------------------------------------------------------------
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
