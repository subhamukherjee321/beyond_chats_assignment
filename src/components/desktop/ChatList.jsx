import styled from "styled-components";
import TabOPtions from "../MobileView/TabOPtions";
import ChatBox from "./ChatBox";
import Nav_desk from "./Nav_desk";

const ChatList = () => {
  return (
    <ChatContainer className="bg-[#212121] w-[25%] max-w-xl max-h-screen overflow-y-auto">
      <Nav_desk />
      <TabOPtions />
      <ChatBox />
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
