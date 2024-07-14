import { IoMenuSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Nav_desk = () => {
  return (
    <div className="flex items-center gap-3 px-5 py-4 fixed top-0 z-10 bg-[#212121]">
      <div className="p-2 rounded-full hover:bg-[#2b2b2b] cursor-pointer">
        <IoMenuSharp color="#aaaaaa" className="w-6 h-6" />
      </div>
      <div className="bg-[#181818] w-[90%] gap-3  items-center flex px-3 py-2 rounded-3xl border border-[rgba(255,255,255,0.2)]">
        <IoSearch color="#707070" className="w-6 h-6" />
        <input
          className="bg-[#181818] text-white border-none outline-none"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Nav_desk;
