
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

export default RestaurantCard;
