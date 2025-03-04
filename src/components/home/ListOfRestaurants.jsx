import React from "react";
import RestaurantCard from "../RestaurantCard";

const ListOfRestauramts = ({ data }) => {
  return (
    <div className="my-4">
      <h1 className="text-3xl font-semibold pb-4">Restaurants</h1>

      <div className="flex justify-center items-center flex-wrap">
        {data?.map((el) => {
          return <RestaurantCard data={el} />;
        })}
      </div>
    </div>
  );
};

export default ListOfRestauramts;
