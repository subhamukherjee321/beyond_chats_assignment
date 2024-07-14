import { create } from "zustand";

const useStore = create((set) => ({
  chats: [],
  setChats: (payload) => set((state) => ({ ...state, chats: payload })),
  chatId: null,
  setChatId: (payload) => set((state) => ({ ...state, chatId: payload })),
  message: { user: [], sender: [] },
  setMessage: (payload) => set((state) => ({ ...state, message: payload })),
}));

export default useStore;
