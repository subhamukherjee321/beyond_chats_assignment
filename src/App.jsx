import ChatList from "./components/desktop/ChatList";
import Message from "./components/desktop/Message";
import MobileHomePage from "./Pages/MobileHomePage";

export default function App() {
  return (
    <main>
      <div className="md:flex overflow-hidden hidden">
        <ChatList />
        <Message />
      </div>

      <MobileHomePage />
    </main>
  );
}
