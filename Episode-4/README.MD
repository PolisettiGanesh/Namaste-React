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
const styleCard = {
  backgroundColor :"#f0f0f0"
}
const RestaurantCard = () => {
  return(
    <div className='res-card' style={styleCard}>
    </div>
  )
}
-----------------------------
<div className='res-card' style={{ backgroundColor :"#f0f0f0"}}> </div>

--------------------------------------------------------------------------
                          props
                      --------------

props =properties
prop is an object it wraps data.

Ex:1
-----
const RestaurantCard = (props) => {
   console.log(props);
   return (
      <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
         <img
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yrycuz88yy7lm2qbsdv6"
         />
         <h2>{props.name}</h2>
         <h3>{props.cuisenes}</h3>
         <h4>{props.rating}</h4>
      </div>
   );
};
const Body = () => {
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            <RestaurantCard
               name="Meghana Foods"
               cuisenes="Biryani,NorthIndia"
               rating="4.5/5"
            />
            <RestaurantCard
               name="Lingaih Hotel"
               cuisenes="Biryani,SouthIndia"
               rating="4.9/5"
            />
            <RestaurantCard
               name="Subbaih Daba"
               cuisenes="Biryani,India"
               rating="4.6/5"
            />
         </div>
      </div>
   );
};


Ex:2
----

const RestaurantCard = (props) => {
  // console.log(props);
  const {name,cuisenes,rating} =props;
   return (
      <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
         <img
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yrycuz88yy7lm2qbsdv6"
         />
         <h2>{name}</h2>
         <h3>{cuisenes}</h3>
         <h4>{rating}</h4>
      </div>
   );
};
const Body = () => {
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            <RestaurantCard
               name="Meghana Foods"
               cuisenes="Biryani,NorthIndia"
               rating="4.5/5"
            />
            <RestaurantCard
               name="Lingaih Hotel"
               cuisenes="Biryani,SouthIndia"
               rating="4.9/5"
            />
            <RestaurantCard
               name="Subbaih Daba"
               cuisenes="Biryani,India"
               rating="4.6/5"
            />
         </div>
      </div>
   );
};


Ex:3
------
const RestaurantCard = ({name,cuisenes,rating}) => {
  // console.log(props);
  // const {name,cuisenes,rating} =props;
   return (
      <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
         <img
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yrycuz88yy7lm2qbsdv6"
         />
         <h2>{name}</h2>
         <h3>{cuisenes}</h3>
         <h4>{rating}</h4>
      </div>
   );
};

---------------------------------------------------------------
    congigure API

 Understand how to work with apis so check ecommerce fake api instead of swiggy to understand swiggy api is difficult little bit

