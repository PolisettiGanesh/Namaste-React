import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchMenu = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${id}`
      );
      const json = await data.json();
      setMenu(json.data);
    };

    fetchMenu();
  }, [id]);

  return menu;
};

export default useRestaurantMenu;
