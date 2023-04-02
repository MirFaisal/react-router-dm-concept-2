import "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggol = () => {
    setOpen(!open);
  };

  const active = ({ isActive }) =>
    isActive ? "active underline text-white font-bold" : "text-white font-bold";
  return (
    <nav className="bg-slate-500 relative">
      <div className="container">
        <div className="navbar-nav py-5 flex justify-between">
          <div className="brand">
            <h2 className="text-2xl font-bold text-white">NAVBAR</h2>
          </div>
          <ul
            className={`absolute flex flex-col left-0 w-full bg-slate-500 ${
              open ? "top-full opacity-100" : "top-[-999px] opacity-100"
            } md:flex md:flex-row md:static items-center justify-end gap-7 duration-1000 ease-linear opacity-100`}
          >
            <NavLink className={active} to={"/home"}>
              Home
            </NavLink>
            <NavLink className={active} to={"/about"}>
              About
            </NavLink>
            <NavLink className={active} to={"/blog"}>
              Blog
            </NavLink>
            <NavLink className={active} to={"/faq"}>
              FAQ
            </NavLink>
            <NavLink className={active} to={"/contact"}>
              Contact
            </NavLink>
          </ul>
          <button
            className="bg-transparent text-white md:hidden"
            onClick={() => {
              toggol();
            }}
          >
            {open ? (
              <XMarkIcon className="w-6" />
            ) : (
              <Bars3Icon className="w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
