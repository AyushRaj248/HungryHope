import React from "react";
import { Link } from "react-router-dom";

const WhatOnMind = ({ data }) => {
  const cards = data?.imageGridCards?.info;
 

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold  my-2">{data?.header?.title}</h1>
      <div className="flex flex-wrap justify-center items-center w-full">
        {cards?.map((el) => {
          return (
            <div>
              <Link to={`${el.action.link}`}>
                <img
                  className="w-32"
                  src={`${`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${el?.imageId}`}`}
                  alt=""
                />
              </Link>
            </div>
          );
        })}
      </div>
      <hr className="font-light"/>
    </div>
  );
};

export default WhatOnMind;
