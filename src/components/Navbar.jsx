import React from "react";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const menu = [
    {
      name: "home",
    },
    {
      name: "contact",
    },
    {
      name: "about",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className=" flex px-8 py-6 relative z-50  shadow-2xl shadow-black/30 rounded-full my-2 w-[96%] mx-auto items-center justify-between backdrop-blur-sm ">
      <div className=" cursor-pointer">
        <h6
          onClick={() => navigate("/")}
          className="text-xl font-semibold italic "
        >
          HungryHope
        </h6>
      </div>

      <div className="mr-16">
        <ul className="flex gap-8">
          {menu.map((el, idx) => {
            return (
              <li className="capitalize">
                <Link key={idx} to={`/${el.name}`}>
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-6">
        <span className="text-xl">
          <MdDarkMode />
        </span>
        <span className="text-xl">
          <IoCartOutline />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
