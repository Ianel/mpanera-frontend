import React from "react";
import SelectInput from "@/components/Input/SelectInput/SelectInput";

const selectItems = [
  { USA: "United States Of America" },
  { UK: "United Kingdom" },
  { USSR: "Russia" },
];

const Header = () => {
  return <SelectInput items={selectItems} />;
};

export default Header;
