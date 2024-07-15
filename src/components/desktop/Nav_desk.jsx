import React, { useState } from "react";
import { IoMenuSharp, IoSearch } from "react-icons/io5";
import { FaSave, FaAddressBook, FaBookOpen, FaCog, FaMoon, FaFilm, FaTelegramPlane, FaBug } from "react-icons/fa";

const Nav_desk = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-10 bg-[#212121]">
      <div className="flex items-center gap-3 px-5 py-4">
        <div
          className="p-2 rounded-full hover:bg-[#2b2b2b] cursor-pointer"
          onClick={toggleMenu}
        >
          <IoMenuSharp color="#aaaaaa" className="w-6 h-6" />
        </div>
        <div className="bg-[#2C2C2C] w-[90%] gap-3 items-center flex px-3 py-2 rounded-3xl">
          <IoSearch color="#707070" className="w-6 h-6" />
          <input
            className="text-white bg-inherit border-none outline-none w-full"
            placeholder="Search"
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-5 w-60 bg-[#2B2B2B] z-30 text-white rounded-lg shadow-lg">
          <ul className="p-4 space-y-2">
            <li className="flex items-center py-2 px-4 hover:bg-[#4f4e4e] cursor-pointer rounded-lg">
              <FaSave className="mr-2" />
              Saved Messages
            </li>
            <li className="flex items-center py-2 px-4 hover:bg-[#4f4e4e] cursor-pointer rounded-lg">
              <FaAddressBook className="mr-2" />
              Contacts
            </li>
            <li className="flex items-center py-2 px-4 hover:bg-[#4f4e4e] cursor-pointer rounded-lg">
              <FaBookOpen className="mr-2" />
              My Stories
            </li>
            <li className="flex items-center py-2 px-4 hover:bg-[#4f4e4e] cursor-pointer rounded-lg">
              <FaCog className="mr-2" />
              Settings
            </li>
            <li className="flex items-center py-2 px-4 hover:bg-[#4f4e4e] cursor-pointer rounded-lg">
              <FaMoon className="mr-2" />
              Night Mode
            </li>
            <li className="flex items-center py-2 px-4 hover:bg-[#4f4e4e] cursor-pointer rounded-lg">
              <FaFilm className="mr-2" />
              Animations
            </li>
            <li className="flex items-center py-2 px-4 hover:bg-[#4f4e4e] cursor-pointer rounded-lg">
              <FaTelegramPlane className="mr-2" />
              Telegram Feature
            </li>
            <li className="flex items-center py-2 px-4 hover:bg-[#4f4e4e] cursor-pointer rounded-lg">
              <FaBug className="mr-2" />
              Report a Bug
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav_desk;
