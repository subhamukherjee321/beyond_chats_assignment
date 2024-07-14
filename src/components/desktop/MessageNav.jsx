import getTwoLetterName from "../../utils/getTwoLetterName";
import randomColor from "../../utils/returnColor";
import useStore from "../../utils/store";
import { IoSearch } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const MessageNav = () => {
  const { message } = useStore();

  const name = message?.sender?.[0]?.name || "Unknown";

  return (
    <div className="flex items-center justify-between bg-[#212121] p-3">
      <div className="flex gap-3 items-center">
        <div
          style={{
            backgroundColor: randomColor(0),
            boxShadow:
              "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
          className="w-10 h-10 rounded-full text-2xl text-white font-semibold flex justify-center items-center"
        >
          {getTwoLetterName(name)}
        </div>
        <div className="text-white font-semibold">{name}</div>
      </div>
      <div className="flex items-start gap-7">
        <IoCall className="w-6 h-6 text-[#aaaaaa]" />
        <IoSearch className="w-6 h-6 text-[#aaaaaa]" />
        <SlOptionsVertical className="w-6 h-6 text-[#aaaaaa]" />
      </div>
    </div>
  );
};

export default MessageNav;
