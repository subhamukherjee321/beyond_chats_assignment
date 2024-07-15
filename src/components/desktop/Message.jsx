import { useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useMessage from "../../hooks/useMessage";
import { ChatBubbleSender, ChatBubbleUser } from "../../shared/ChatBubbleDesk";
import useStore from "../../utils/store";
import MessageNav from "./MessageNav";

const Message = () => {
  const { chatId } = useStore();
  const { message } = useMessage(chatId);
  console.log("message: ", message);
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
      className="bg-[#1a0a22] bg-no-repeat flex justify-between flex-col pb-[1.5rem] w-full md:w-[75%] pl-6 md:pl-0 h-[100vh]"
    >
      <MessageNav />  
      <MessageContainer
        ref={rootRef}
        className="flex pt-4 flex-col gap-5 max-h-[500px] overflow-y-auto"
      >
        {message.user.map((item, idx) => (
          <div key={idx} className="w-full md:w-[70%] flex flex-col gap-5 mx-auto">
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

      {message?.user.length !== 0 && (
        <div className="flex items-center justify-between w-full md:w-[50%] mx-auto mt-6">
          <div className="flex items-center gap-6 h-[50px] px-4 rounded-[20px] bg-[#212121] w-[90%]">
            <BsEmojiSmile className="text-gray-400 w-[25px] h-[25px]" />
            <input
              type="text"
              placeholder="Message"
              className="bg-inherit text-[18px] semibold h-full outline-none text-gray-400"
              style={{ width: "cal(80% - 30px)" }}
            />
          </div>
          <MdKeyboardVoice className="text-gray-400 p-2 rounded-full bg-[#212121] w-[45px] h-[45px]" />
        </div>
      )}
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
