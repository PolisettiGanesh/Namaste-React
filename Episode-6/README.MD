We can load Ui two ways
    - loads ->API ->Render
    - loads -> Render->API ->Render

    useEffect
    -----------
    useEffect wil work inside the component ,first component will be rendered then useEffect will becalled inside useeffect fucntion will execute
  syntax:
  -------
  useEffect (()=>{

  },[])

useEffect will take two arguments 1. callback fucntion
                                   2. Array Dependency

Ex:
---
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import restList from "../utils/mockData";

const Body = () => {
const [RestList,setRestList] = useState(restList);

  useEffect(()=>{
    console.log("useEffect called");
  },[]);

  console.log("Body component rendered");
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
-------------------------------------------------------
ex:2
----
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import restList from "../utils/mockData";

const Body = () => {
const [RestList,setRestList] = useState(restList);

  useEffect(()=>{
    fetchData();
  },[]);

const fetchData =async () =>{
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

    const json = await data.json();
    console.log(json);
  }
  console.log("Body component rendered");
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
----------------------------------------------------

Live Api data is problem with swiggy ,so i tried with ecommerce api

Ex:
---
import { useState, useEffect } from 'react';
import Product from './Product';
import Skeleton from './Skeleton';
const ProductCard = () => {
   const [listProducts, setListProducts] = useState([]);
   const [SearchState, setSearchState] = useState('');
   const[filterProducts,setFilterProducts]=useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const resData = await data.json();
      console.log(resData);
      setListProducts(resData);
      setFilterProducts(resData);
   };

   return listProducts.length === 0 ? (
      <Skeleton />
   ) : (
      <>
         <div style={{ margin: '20px' }}>
            <input
               type="text"
               onChange={(e) => {
                 setSearchState(e.target.value)
               }}
               value={SearchState}
            />
            <button style={{ marginLeft: '30px', marginTop: '20px' }}
            onClick={()=>{
             const filteredData =listProducts.filter((product)=>{
              return product.title.toLowerCase().includes(SearchState)
             })
             setFilterProducts(filteredData)
            }}>
               Search
            </button>
         </div>
         <div className="button">
            <button
               style={{
                  backgroundColor: 'black',
                  padding: '20px',
                  color: 'white',
                  textAlign: 'center',
               }}
               onClick={() => {
                  const filteredProducts = listProducts.filter(
                     (product) => product.rating.rate >= 4
                  );
                  setListProducts(filteredProducts);
               }}>
               Click
            </button>
         </div>

         <div className="product-container">
            {filterProducts.map((product) => {
               return <Product key={product.id} product={product} />;
            })}
         </div>
      </>
   );
};
export default ProductCard;

---------------------------------------------
useState button example
-----------------------
import { useState } from "react";
const Navbar = () => {
  const[btnName,setBtnName] = useState("Dark");
  return (
      <div className="nav-bar">
         <h1 className="logo">LOGO</h1>
         <ul className="nav-items">
            <li>Men</li>
            <li>Womens</li>
            <li>Kids</li>
            <button onClick={()=>{
              btnName ="Dark"? setBtnName("Light"):setBtnName("Dark");
            }}>{btnName}</button>
         </ul>
      </div>
   );
};
export default Navbar;
--------------------------------------------------------
  Note: This Episode i have some doubts after clarifying i will update it new Episode Upcoming Episodes.
