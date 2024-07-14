import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useMessage from "../../hooks/useMessage";
import { ChatBubbleSender, ChatBubbleUser } from "../../shared/ChatBubbleDesk";
import useStore from "../../utils/store";
import MessageNav from "./MessageNav";
import styled from "styled-components";

const Message = () => {
  const { chatId } = useStore();
  const { message } = useMessage(chatId);
  const rootRef = useRef(null);
  const [observerRef, isIntersecting] = useIntersectionObserver({
    root: null, // Use the viewport as the container
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  const [dateData, setDateData] = useState(null);

  useEffect(() => {
    console.log("date", dateData);
  }, [dateData]);

  return (
    <div
      style={{ width: "calc(100% - 425px)" }}
      className="bg-[#1a0a22] bg-no-repeat"
    >
      <MessageNav />
      <MessageContainer
        ref={rootRef}
        className="flex pt-4 flex-col gap-5 max-h-[500px] overflow-y-auto"
      >
        {message.user.map((item, idx) => (
          <div key={idx} className="w-[475px] flex flex-col gap-5 mx-auto">
            <ChatBubbleSender
              message={message.sender[idx]?.message}
              name={message.sender[idx]?.name}
              date={message.sender[idx]?.date}
              observerRef={observerRef}
              isIntersecting={isIntersecting}
              setDateData={setDateData}
            />
            <ChatBubbleUser
              message={item.message}
              name={item?.name}
              date={item.date}
            />
          </div>
        ))}
      </MessageContainer>
    </div>
  );
};

const MessageContainer = styled.div`
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333333;
    border-radius: 8px;
  }
`;

export default Message;
