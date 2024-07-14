import { create } from "zustand";

const useStore = create((set) => ({
  chats: [],
  setChats: (payload) => set(() => ({ chats: payload })),
}));

export default useStore;
