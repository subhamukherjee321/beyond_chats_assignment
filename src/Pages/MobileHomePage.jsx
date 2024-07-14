import React from "react";
import BottomBarTabs from "../components/MobileView/BottomBar";
import MobileNavbar from "../components/MobileView/MobileNavbar";

const MobileHomePage = () => {
  return (
    <section className="sm: block md:hidden">
      <header>
        <MobileNavbar />
        <BottomBarTabs />
      </header>
    </section>
  );
};

export default MobileHomePage;
