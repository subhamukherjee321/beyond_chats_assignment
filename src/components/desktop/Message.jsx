import useMessage from "../../hooks/useMessage";
import useStore from "../../utils/store";
import MessageNav from "./MessageNav";

const Message = () => {
  const { chatId } = useStore();
  const { message } = useMessage(chatId);

  return (
    <div
      style={{ width: "calc(100% - 425px)" }}
      className="bg-[#1a0a22] max-h-screen bg-no-repeat"
    >
      <MessageNav />
      <div className="flex flex-col gap-5 max-h-[550px] overflow-y-auto">
        {message.user.map((msg, idx) => (
          <div key={idx} className="w-[475px] flex flex-col gap-5 mx-auto">
            <div className="bg-[#8774e1] text-white">{msg}</div>
            <div className="bg-[#212121] text-white">{message.sender[idx]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
