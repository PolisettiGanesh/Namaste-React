import React from 'react';
import { createRoot } from 'react-dom/client';

/**    Project Design
 * Header
      - Logo
      - Nav-items

 * Body
     - Search
     - RestaurantContainer
     - RestaurantCard

 * Footer
      - Copyright
      - Links
      - Address
      - Contact

 */

const Header = () => {
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
         </div>
      </div>
   );
};

const RestaurantCard = ({info}) => {
   // console.log(props);
   // const {name,cuisenes,rating} =props;
   const{name,cuisines,avgRating,costForTwo,cloudinaryImageId,locality,areaName,RestaurantName}=info;

   return (
      <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
         <img
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yrycuz88yy7lm2qbsdv6"
         />
         <h2>{name}</h2>
         <h3>
            {locality}, {areaName}
         </h3>
         <h4>{cuisines}</h4>
         <h4>{avgRating} ⭐</h4>
         <h4>{costForTwo}</h4>
      </div>
   );
};

const restList = [
  {
    RestaurantName:"Subbaih",
    id:"312456",
    name: "Domino's Pizza",
    cloudinaryImageId: "mvpqjyk6x08aje3kjlhs",
    locality: "ITKI Road",
    areaName: "Ratu",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.1
  },
  {
    RestaurantName:"Lingaih",
    id: "80228",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Nucleus Mall",
    areaName: "Lalpur",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 3.6
  }
];


const Body = () => {
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            {restList.map((restaurant) => (
               <RestaurantCard key={restaurant.id} info={restaurant} />
            ))}
         </div>
      </div>
   );
};
const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
      </div>
   );
};
const root = createRoot(document.getElementById('root'));
root.render(<AppLayout />);
