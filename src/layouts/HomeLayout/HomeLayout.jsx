import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <main className="px-8">{children}</main>
    </div>
  );
};

export default HomeLayout;
