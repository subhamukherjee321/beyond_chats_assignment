import { useEffect } from "react";
import useStore from "../utils/store";
import axios from "axios";

const useChat = () => {
  const { setChats, chats } = useStore();

  const loadChats = async (page = 1) => {
    try {
      const res = await axios.get(
        `https://devapi.beyondchats.com/api/get_all_chats?page${page}`
      );

      //console.log("chats", res.data.data.data);
      setChats(res.data.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    loadChats();

    //eslint-disable-next-line
  }, []);

  return { chats };
};

export default useChat;
