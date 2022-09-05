import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="">
      <main className="px-8">{children}</main>
      <footer className="bg-primaryWhite text-center shadow-lg p-8">
        &copy; Copyright {new Date(Date.now()).getFullYear()} || Tous droits
        réservés
      </footer>
    </div>
  );
};

export default HomeLayout;
