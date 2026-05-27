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
