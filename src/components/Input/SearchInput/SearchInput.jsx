import React from "react";
import { FaSearch } from "react-icons/fa";
import Input from "../index";

const SearchInput = () => {
  return (
    <div className="flex items-center">
      <Input
        bordercolor="none"
        className="rounded-t-2xl rounded-l-2xl  rounded-r-none shadow-lg"
      />
      <FaSearch className="bg-accent p-4" />
    </div>
  );
};

export default SearchInput;
