import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";

const Restaurant = () => {
  const { id } = useParams();

  const [restaurantData, setRestaurantData] = useState({});

  useEffect(() => {
    FetchRestaurantData();
  },[]);

  const FetchRestaurantData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await response.json();

      setRestaurantData(data);
    } catch (error) {}
  };

  // console.log(restaurantData);

  const Restaurant_info = restaurantData?.data?.cards[2]?.card?.card?.info;




  console.log(Restaurant_info);
  

  return <div className="w-1/2 mx-auto">
    <RestaurantInfo data={Restaurant_info}/>
  </div>;
};

export default Restaurant;
