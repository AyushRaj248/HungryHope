import React from "react";
import RestaurantCard from "../RestaurantCard";

const TopRestaurants = ({ data }) => {
  console.log(data);
  const cards = data?.gridElements?.infoWithStyle?.restaurants;

  console.log(cards);

  return (
    <div className="my-6">
      <h1 className="text-3xl pb-4 font-semibold">{data?.header?.title}</h1>

      <div className="flex justify-center items-center flex-wrap">
        {cards?.map((el) => {
          return <RestaurantCard data={el} />;
        })}
      </div>
    </div>
  );
};

export default TopRestaurants;
