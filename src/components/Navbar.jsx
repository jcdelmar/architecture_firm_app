import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";

import {
  close,
  logo_notext,
  menu,
  fr1,
  fr2,
  fr3,
  fr4,
  fr5,
  fr6,
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7,
  house8,
} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" flex py-4 justify-between items-center navbar ">
      <a href="/">
        <div className="flex flex-row cursor-pointer">
          <img src={logo_notext} alt="hoobank" className="w-[48px] h-[48px]" />
          <p className="font-poppins text-lg ml-2 justify-start">
            ARCHITECTURE <br />
            DESIGN STUDIO
          </p>
        </div>
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title
                ? "text-gray-600 underline underline-offset-8 decoration-gray-600 decoration-solid"
                : "text-gray-950"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer z-50">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-gradient-to-r from-gray-300 to-gray-100 opacity-95`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                  active === nav.title
                    ? "text-gray-600 underline underline-offset-8 decoration-gray-600 decoration-solid"
                    : "text-gray-950"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                hover:text-gray-600
                `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
