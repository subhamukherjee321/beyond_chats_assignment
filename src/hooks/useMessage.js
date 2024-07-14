import axios from "axios";
import { useEffect, useState } from "react";

const useMessage = (chatId) => {
  const [message, setMessage] = useState({
    user: [],
    sender: [],
  });

  const getMessages = async () => {
    try {
      const res = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
      );

      const user = [];
      const sender = [];

      res.data.data.forEach((chat) => {
        if (chat.sender.email === "contact@beyondchat.com") {
          user.push(chat.message);
        } else {
          sender.push(chat.message);
        }
      });

      setMessage({ user, sender });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (chatId) {
      getMessages();
    }

    //eslint-disable-next-line
  }, [chatId]);

  return { message };
};

export default useMessage;
