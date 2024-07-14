import PropTypes from "prop-types";
import getTwoLetterName from "../../utils/getTwoLetterName";
import randomColor from "../../utils/returnColor";
import useStore from "../../utils/store";

const Chat = ({ chat, index }) => {
  const { setChatId } = useStore();

  return (
    <div
      onClick={() => setChatId(chat?.id)}
      className="hover:bg-[#2b2b2b] cursor-pointer px-2 py-2 flex gap-2 items-center rounded-md relative"
    >
      <div
        style={{
          backgroundColor: randomColor(index),
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
        className="w-14 h-14 rounded-full text-2xl text-white font-semibold flex justify-center items-center"
      >
        {getTwoLetterName(chat?.creator?.name)}
      </div>
      <div>
        <p className="text-white font-semibold">
          {chat?.creator?.name || "Unknown"}
        </p>
        <p className="text-[#a6a6a6]">User joined telegram</p>
      </div>
      <span className="absolute right-2 top-2"></span>
    </div>
  );
};

Chat.propTypes = {
  chat: PropTypes.object,
  index: PropTypes.number,
};

export default Chat;
