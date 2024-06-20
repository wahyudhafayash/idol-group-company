// components/Navbar.js
"use client";

import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 fixed w-full backdrop-blur z-50">
      <div className="max-w-7xl mx-auto flex justify-between   items-center">
        <div className="flex-shrink-0">
          <a
            href="/"
            className="text-white text-4xl font-bold hover:text-purple-600"
          >
            MDN48
          </a>
        </div>
        <div className="block lg:hidden">
          <IconButton
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:bg-gray-700"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-xl lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-600 mr-4"
            >
              Home
            </a>
            <a
              href="/aboutus"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-600 mr-4"
            >
              About Us
            </a>
            <a
              href="/product"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-600 mr-4"
            >
              Product
            </a>
            <a
              href="/teams"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-600"
            >
              Teams
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className=" p-4 fixed w-full backdrop-blur z-50">
          <div className=" lg:hidden mt-4">
            <a href="/" className="block mt-2 text-white hover:text-purple-600">
              Home
            </a>
            <a
              href="/aboutus"
              className="block mt-2 text-white hover:text-purple-600"
            >
              About Us
            </a>
            <a
              href="/product"
              className="block mt-2 text-white hover:text-purple-600 mr-4"
            >
              Product
            </a>
            <a
              href="/teams"
              className="block mt-2 text-white hover:text-purple-600"
            >
              Teams
            </a>
          </div>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
