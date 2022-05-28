import Input from "@/components/Input";
import React from "react";

const NavSearchBar = ({ className }) => {
  return (
    <div className={className}>
      <Input
        className="p-1 pl-4 md:rounded-md rounded-3xl"
        placeholder="Commencez votre recherche"
      />
    </div>
  );
};

export default NavSearchBar;
