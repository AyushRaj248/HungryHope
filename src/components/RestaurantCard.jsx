import React from "react";
import { IoIosStar } from "react-icons/io";

const RestaurantCard = ({ data }) => {
  const info = data?.info;

  return (
    <div className="h-70 w-52 cursor-pointer m-4 overflow-hidden hover:scale-105 transition-all duration-300 rounded-3xl">
      <div className="w-full h-[60%]  ">
        <img
          className="object-cover h-full w-full rounded-3xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info?.cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div className="p-2">
        <p className="text-md font-semibold">{info?.name}</p>
        <div className=" flex text-sm  items-center">
          <span className="mr-1 flex gap-1 items-center justify-start">
            <IoIosStar className="text-green-600 border-2 rounded-4xl font-bold text-md " />
            <span>{<span>{info?.avgRating}</span>}</span>
          </span>

          <span className="mx-1 ">
            <span>{info?.sla?.slaString}</span>
          </span>
        </div>
        <div>
          <p className="text-sm">
            {info?.cuisines?.join(", ")?.slice(0, 25) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
