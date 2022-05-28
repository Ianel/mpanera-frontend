import React from "react";
import Image from "@/components/Image";
import { login } from "@/assets/images/images";
import Title from "@/components/Title";
import { FaHeart, FaHeartbeat } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const HouseCard = () => {
  return (
    <div className="w-80 relative">
      <MdFavoriteBorder className="text-white absolute top-4 right-4" />
      <Image src={login} alt={"A mac computer"} className="rounded-md h-72" />
      <Title type="h5" className="font-bold text-primaryDark pt-4">
        Villa Belle Vue
      </Title>
      <Title type="h5" className="break-words text-gray-700">
        Lot 312 Parcelle 1225 Antanambao Ambalavato, Mahajanga 401
      </Title>
      <Title type="h5" className="pb-4">
        <span className="font-bold text-primaryDark">700.000 Ar</span> / mois
      </Title>
    </div>
  );
};

export default HouseCard;
