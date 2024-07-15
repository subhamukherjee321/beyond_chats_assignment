import React, { useState } from "react";

const TabOPtions = () => {
  const [activeTab, setActiveTab] = useState("All Chats");
  const tabs = ["All Chats", "Active", "Unread", "Regulars"];

  return (
    <div className="flex space-x-4 bg-[#2B2B2B] px-4 pl-12 md:pl-4 mb-1 overflow-x-auto text-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-1 py-2 px-0 font-semibold whitespace-nowrap ${
            activeTab === tab
              ? "border-b-4 border-[#40a4c4] text-[#40a4c4]"
              : "border-b-2 border-transparent"
          } transition duration-300 ease-in-out`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabOPtions;
