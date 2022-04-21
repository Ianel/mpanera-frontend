import React from "react";
import { Button } from "../Buttons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Card = () => {
  return (
    <div className="border-2 p-4 shadow-md">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <p className="text-sm my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil
        fuga repellat odit! Incidunt, corrupti. Ut quos ad ipsum itaque
        blanditiis non rerum! A, debitis fugiat suscipit nesciunt illum at.
      </p>
      <Button wide>Hello</Button>
    </div>
  );
};

const MainCard = ({ src, items }) => {
  return (
    <div className="w-[22vw] bg-white p-4 rounded-md relative">
      <img className="rounded-md" src={src} alt="Card image" />
      <div className="py-4 flex lg:flex-row justify-between items-center">
        <h2 className="font-bold">Villa Meublé</h2>
        <p className="text-[#414e73] font-semibold">4.800.500 MGA</p>
      </div>
      <div className="flex lg:flex-row justify-between items-start">
        <FaMapMarkerAlt className="text-accent mr-2" />
        <span className="text-sm">
          Lot 312 Parcelle 1225 Tanambao Ambalavato
        </span>
      </div>
      <ul className="text-sm">
        {items.map((item, index) => {
          return <li key={`li${index}`}>{item}</li>;
        })}
      </ul>
      <Button className="text-sm absolute bottom-4 right-4 flex lg:flex-row justify-between items-center rounded-2xl px-4">
        <MdShoppingCart className="mr-2" />
        <span>Ajouter au panier</span>
      </Button>
    </div>
  );
};

export { MainCard };
export default Card;
