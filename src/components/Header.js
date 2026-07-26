
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/Home" },
  { name: "Skills", path: "/Skills" },
  { name: "Work", path: "/Work" },
  { name: "About", path: "/About" },
  { name: "Contact Us", path: "/Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          <NavLink to="/Home">Prashant kumar</NavLink>
        </h1>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent items-center gap-6 md:gap-10 py-6 md:py-0`}
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-lg font-medium transition-all duration-300
                  ${
                    isActive
                      ? "text-orange-500"
                      : "text-white hover:text-orange-400"
                  }
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:bg-orange-500 after:transition-all after:duration-300
                  ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;