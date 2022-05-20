import React from "react";
import { Link } from "react-router-dom";
import Title from "@/components/Title";
import Image from "@/components/Image";
import { logoBlue } from "@/assets/images/images";

const NavBrand = ({ className }) => {
  return (
    <div className={className}>
      <Image className="w-12 h-12" src={logoBlue} alt="logo" />
      <Link to="/">
        <Title className="h1 text-accent text-xl">Mpanera</Title>
      </Link>
    </div>
  );
};

export default NavBrand;
