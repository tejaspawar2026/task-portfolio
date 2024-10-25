import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import AppLogo from "../../../assets/img-categ-1/appLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/aboutme", label: "About Me" },
    { path: "/skills", label: "Skills" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/companies", label: "Companies" },
    { path: "/contactme", label: "Contact Me" },
  ];

  return (
    <>
      <nav className="bg-slate-200 shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img src={AppLogo} alt="App Logo" className="w-10 h-10 bg-white object-cover rounded-full hover:cursor-pointer" />
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="py-2 px-4 text-gray-700 hover:text-yellow-400 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-max-height duration-300 ease-in-out md:hidden`}
        >
          <div className="bg-slate-200">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 px-4 text-gray-700 hover:text-yellow-400 text-center"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
