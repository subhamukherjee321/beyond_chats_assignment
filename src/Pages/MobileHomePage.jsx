import React from "react";
import MobileNavbar from "../components/MobileView/MobileNavbar";
import BottomBarTabs from "../components/MobileView/BottomBar";

const MobileHomePage = () => {
  return (
    <section>
      <header>
        <MobileNavbar />
        <BottomBarTabs />
      </header>
    </section>
  );
};

export default MobileHomePage;
