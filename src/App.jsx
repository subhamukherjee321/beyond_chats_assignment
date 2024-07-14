import ChatList from "./components/desktop/ChatList";
import Message from "./components/desktop/Message";

export default function App() {
  return (
    <div className="flex">
      <ChatList />
      <Message />
    </div>
  );
}
