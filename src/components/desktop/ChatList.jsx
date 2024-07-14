import useChat from "../../hooks/useChat";
import Chat from "./Chat";
import Nav_desk from "./Nav_desk";
import styled from "styled-components";

const ChatList = () => {
  const { chats } = useChat();

  // console.log("chats", chats);
  return (
    <ChatContainer className="bg-[#212121] w-[425px] max-w-xl max-h-screen overflow-y-auto">
      <Nav_desk />
      <div className="flex flex-col px-2">
        {chats.map((chat, idx) => (
          <Chat key={idx} index={idx + 1} chat={chat} />
        ))}
      </div>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  &::-webkit-scrollbar-track {
  }

  &::-webkit-scrollbar {
    width: 0px;
  }

  &:style-1::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

export default ChatList;
