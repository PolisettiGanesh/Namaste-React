import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
 const[btnName,setBtnName] = useState("LOGIN");


 // This will called whenevr btnName will be rendered
 useEffect(()=>{
  console.log("useEffect called");
 },[btnName])

 console.log("Component render");
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
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact Us</Link></li>
               <li><Link to="/cart">Cart</Link></li>
            </ul>
            <button className="login" onClick={()=>{
              btnName==="LOGIN"? setBtnName("LOGOUT"):setBtnName("LOGIN")
            }}>{btnName}</button>
         </div>
      </div>
   );
};

export default Header;
