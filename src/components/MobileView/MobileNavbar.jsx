import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";

const MobileNavbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#40a4c4]">
      <div className="flex items-center w-[50%] justify-between">
        <div className="w-[30px] h-[30px] flex justify-center items-center">
          <GiHamburgerMenu
            style={{
              width: "100%",
              height: "100%",
              font: "bold",
              color: "white",
            }}
          />
        </div>
        <h1 className="text-[27px] text-white font-[500]">Telegram</h1>
      </div>

      <div className="h-[30px] w-[30px] flex justify-center items-center">
        <IoMdSearch
          style={{
            width: "100%",
            height: "100%",
            color: "white",
            font: "bold",
          }}
        />
      </div>
    </nav>
  );
};

export default MobileNavbar;
