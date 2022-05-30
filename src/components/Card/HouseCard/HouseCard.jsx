import React, { useState } from "react";
import Image from "@/components/Image";
import { login } from "@/assets/images/images";
import Title from "@/components/Title";
import { FaHeart, FaHeartbeat } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const HouseCard = ({ path }) => {
  const [addToFave, setAddToFave] = useState(false);

  return (
    <Link to={path}>
      <div className=" lg:w-[15.0925rem] md:w-[13rem] w-72 relative mx-8">
        <button onClick={() => setAddToFave((addToFave) => !addToFave)}>
          {!addToFave ? (
            <MdFavoriteBorder className="text-white absolute top-9 right-4" />
          ) : (
            <MdFavorite className="text-red-500 absolute top-9 right-4" />
          )}
        </button>
        <Image src={login} alt={"A mac computer"} className="rounded-md h-48" />
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
    </Link>
  );
};

export default HouseCard;
