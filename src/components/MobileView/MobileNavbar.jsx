import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  FaAddressBook,
  FaCog,
  FaPeopleArrows,
  FaPhone,
  FaRegBookmark,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";

const MobileNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-[#40a4c4]">
        <div className="flex items-center w-[50%] justify-between">
          <div
            className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
            onClick={toggleDrawer}
          >
            <GiHamburgerMenu className="w-full h-full text-white font-bold" />
          </div>
          <h1 className="text-[27px] text-white font-[500]">Telegram</h1>
        </div>

        <div className="h-[30px] w-[30px] flex justify-center items-center">
          <IoMdSearch className="w-full h-full text-white font-bold" />
        </div>
      </nav>

      <div
        className={`text-lg font-semibold fixed inset-y-0 left-0 w-64 bg-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        <div className="bg-[#40a4c4] p-4">
          <div className="flex justify-between">
            <img
              src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg"
              alt="User Avatar"
              className="rounded-full h-[60px] w-[60px]"
            />

            <BsFillMoonStarsFill
              style={{
                color: "white",
                height: "20px",
                width: "20px",
                transform: "rotate(360deg)",
                marginTop: "0.3rem",
              }}
            />
          </div>

          <div className="flex justify-between items-center text-sm mt-6 text-white">
            <div>
              Subha Mukherjee
              <br />
              +91 9876543210
            </div>

            <MdKeyboardArrowDown
              style={{ width: "30px", height: "30px", font: "bold" }}
            />
          </div>
        </div>
        <ul>
          <li className="flex items-center hover:bg-gray-200 px-4 py-2">
            <FaUserAlt className="mr-2" /> My Profile
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaUsers className="mr-2" /> New Group
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaAddressBook className="mr-2" /> Contacts
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaPhone className="mr-2" /> Calls
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaPeopleArrows className="mr-2" /> People Nearby
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaRegBookmark className="mr-2 font-bold" /> Saved Messaages
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <FaCog className="mr-2" /> Settings
          </li>
        </ul>

        <hr />

        <ul className="mt-1.5">
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <IoPersonAdd className="mr-2" /> Invite Friends
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <RxQuestionMarkCircled className="mr-2 font-bold" /> Telegram Features
          </li>
        </ul>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default MobileNavbar;
