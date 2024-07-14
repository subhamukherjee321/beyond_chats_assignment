import useChat from "../../hooks/useChat";
import Nav_desk from "./Nav_desk";

const ChatList = () => {
  const { chats } = useChat();

  console.log("chats", chats);
  return (
    <div className="bg-[#212121] w-[425px] max-w-xl">
      <Nav_desk />
    </div>
  );
};

export default ChatList;
