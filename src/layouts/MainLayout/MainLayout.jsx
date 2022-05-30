import React from "react";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="bg-secondaryWhite px-20">{children}</main>
    </div>
  );
};

export default MainLayout;
