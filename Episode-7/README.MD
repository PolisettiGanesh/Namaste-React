useEffect
-----------
 ->   useEffect will be called everytime the components renders if there is no Array dependency

          useEffect(()=>{
            console.log("useEffect called");
          },)

-> If there is empty Array Dependency then useeffect will be called only once

            useEffect(()=>{
              console.log("useEffect called");
            },[])


          Component render
          useEffect called
           Component render
          useeffect called
           Component render
          useEffect called
           Component render
          useEffect called
----------------------------------------------------------------------
Always use  useState inside component at initial level ,if we don't messup with inconsistency

--------------------------------------------------------
         React-Router
when we want to develop routes we have to develop routing configuration.

Before thsat we need to install react-router-dom using
                  npm install react-router-dom@6

After installation where we have to use ,i want to use in App componnet

There you need to import createBrowserRoot form this react-router-dom library

        import { createBrowserRouter } from 'react-router-dom';

This will take some configuration that is in the form of list

that configuration we want to provide in the App by using RouterProvider which is from same library react-router-dom again we have to import that also

-------------------------------------
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
      </div>
   );
};

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
   },
   {
      path: '/about',
      element: <About />,
   },
   {
    path:"/contact",
    element:<Contact />
   }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

--------------------------------
if we open page /about ,/contact it iwll open if we type wrong /ganesh then shows error default,

we can aslo show error errorElement componnet like custom errors

ex:
----
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
      </div>
   );
};

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      errorElement:<Error />
   },
   {
      path: '/about',
      element: <About />,
   },
   {
    path:"/contact",
    element:<Contact />
   }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
---------------------------------------------
If we want to show better error something extra we have to import
       useRouteError  from react-router-dom

ex:
----

import { useRouteError } from "react-router-dom";
const Error = () =>{
   const err = useRouteError();
    console.log(err);
  return(
    <div>Error OOPS ❌
       <h3>{err.status}:{err.statusText} </h3>
    </div>

  )
}

export default Error;
-----------------------------------------------------------------------

                      children routes

If we want to develop this children route configurtation we have to import Outlet from reatc-router-dom library

ex:
---
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Outlet />
      </div>
   );
};

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      children:[
        {
          path:"/",
          element:<Body />
        },
        {
      path: '/about',
      element: <About />,
   },
   {
    path:"/contact",
    element:<Contact />
   }
      ],

      errorElement:<Error />
   },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
----------------------------------------------------------
when we click we have to transfert ot hat components using hyperlinks
In react don't use  anchor tag

If we use anchor tag then the whole page get refreshed guys

i don't want to get refreshed i want to route another componnet without refreshing the qwhole page
  here come Link tag in react

  we have to import
          import { Link } from "react-router-dom";

syntax:
  <Link to="/about">About<Link>
ex:
----

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
