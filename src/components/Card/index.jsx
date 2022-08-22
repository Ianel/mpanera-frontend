import React, { useState } from "react";
import { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import housesServices from "../../services/houses.services";

const Card = ({ house }) => {
  const [image, setImage] = useState(null);
  console.log(house);

  useEffect(() => {
    housesServices
      .getHouseImagesById(house.house_id)
      .then((images) => {
        const imagesPath = images.data.results.map((image) => image["path"]);
        setImage(imagesPath[0]);
      })
      .catch((err) => console.error(err));
  }, [house]);

  return (
    <Link to={`/houses/${house.house_id}`} className="cursor-pointer">
      <div>
        <img
          className="w-56 h-48 object-cover rounded-md"
          src={`http://localhost:4000/${image}`}
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
