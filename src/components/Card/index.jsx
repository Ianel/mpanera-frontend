import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { login } from "../../assets/images/images";

const Card = ({ house }) => {
  console.log(house);

  return (
    <Link to={`/houses/${house.house_id}`} className="cursor-pointer">
      <div>
        <img
          className="w-56 h-48 object-cover rounded-md"
          src={login}
          alt="Image of house"
        />
        <div className="py-2">
          <p className="font-bold text-zinc-800 underline">{house.label}</p>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="ml-2 text-zinc-600">{house.city}</span>
          </div>
          <p>
            <span className="font-bold">MGA {house.rent_price}</span> / mois
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
