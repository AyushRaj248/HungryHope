import React, { useEffect, useState } from "react";
import WhatOnMind from "../components/home/WhatOnMind";
import TopRestaurants from "../components/home/TopRestaurants";
import ListOfRestauramts from "../components/home/ListOfRestaurants";

const Home = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7419621&lng=77.40994970000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const data = await response.json();

      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  // console.log(data);

  const What_On_Mind = data?.data?.cards[0]?.card?.card;

  const Top_Restaurants = data?.data?.cards[1]?.card?.card;

  const List_Of_Restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  console.log(List_Of_Restaurants);
  


  return (
    <div className="w-[90%] mx-auto my-8 ">
      <WhatOnMind data={What_On_Mind}/>
      <TopRestaurants data={Top_Restaurants}/>
      <ListOfRestauramts data={List_Of_Restaurants}/>
    </div>
  );
};

export default Home;
