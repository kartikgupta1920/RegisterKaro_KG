import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import logo from "../assets/logo.png";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md">
        {/* Top Info Bar */}
        <div className="bg-[#1C4670] text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-3">
              <MdEmail />
              <span>www.registerkaro.in</span>
              <span className="mx-2">|</span>
              <FaPhoneAlt />
              <span>+91 8447746183</span>
            </div>
            <div className="flex items-center gap-3 mt-2 lg:mt-0">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
              <FaPinterest />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-black text-white py-3 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="w-44">
              <img src={logo} alt="Register Karo" className="w-full" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6">
              <li><a href="/" className="hover:text-orange-400">Home</a></li>
              <li className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
                Our Services <IoIosArrowDown />
              </li>
              <li><a href="/" className="hover:text-orange-400">Blog</a></li>
              <li><a href="/" className="hover:text-orange-400">Contact Us</a></li>
              <li><a href="/" className="hover:text-orange-400">About Us</a></li>
              <li className="flex items-center gap-4">
                <FiSearch className="cursor-pointer" />
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded">
                  Talk to Expert
                </button>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <div className="lg:hidden text-2xl">
              <button onClick={() => setMenu(true)}>
                <CiMenuFries />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to offset fixed navbar height */}
      <div className="h-[116px]"></div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 bg-white text-black w-3/4 sm:w-1/2 h-full p-6 shadow-2xl z-50 transition-transform duration-500 ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <img src={logo} alt="Register Karo" className="w-32" />
          <button onClick={() => setMenu(false)} className="text-2xl">
            <RxCross2 />
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-lg font-semibold">
          <li><a href="/">Home</a></li>
          <li className="flex items-center gap-1 cursor-pointer">
            Our Services <IoIosArrowDown />
          </li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">About Us</a></li>
          <li>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded w-full">
              Talk to Expert
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
