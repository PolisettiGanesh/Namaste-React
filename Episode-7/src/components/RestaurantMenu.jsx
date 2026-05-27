import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const { id } = useParams(); // dynamic restaurant id
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${id}`
    );
    const json = await data.json();
    setMenu(json.data);
  };

  if (!menu) return <h2>Loading Menu...</h2>;

  return (
    <div>
      <h2>{menu?.cards[0]?.card?.card?.info?.name}</h2>
      <h3>Menu</h3>
      <ul>
        {menu?.cards
          ?.find((c) => c.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((item, i) => (
            <li key={i}>{item?.card?.card?.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
