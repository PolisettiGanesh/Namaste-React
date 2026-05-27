
//    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, locality, areaName } = info;

//    return (
//       <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
//          <img
//             className="res-logo"
//             alt={name}
//             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/9/14/f14c542c-a59a-497f-808e-63dcd358344e_850d5850-d55c-43cc-bf1d-6055cf760072.png_compressed"
//          />
//          <h2>{name}</h2>
//          <h3>{locality}, {areaName}</h3>

//          <h4>{avgRating} ⭐</h4>
//          <h4>₹{costForTwo / 100} for two</h4>
//       </div>
//    );
// };
const RestaurantCard = ({ info }) => {
  if (!info) return null;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    locality,
    areaName,
    sla,
    totalRatingsString
  } = info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt={name}
        src={
          cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
            : "https://via.placeholder.com/300x200.png?text=No+Image"
        }
      />
      <h2>{name}</h2>
      <h3>
        {locality}, {areaName}
      </h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>
        {avgRating} ⭐ ({totalRatingsString})
      </h4>
      <h4>{costForTwo}</h4>
      <h4>⏱ {sla?.slaString}</h4>
    </div>
  );
};



export default RestaurantCard;
