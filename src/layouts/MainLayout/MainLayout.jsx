import React from "react";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="bg-[#F5F5F5]">{children}</main>
    </div>
  );
};

export default MainLayout;
