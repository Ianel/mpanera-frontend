import React from "react";
import { Link } from "react-router-dom";
import { login, logoBlue } from "../../assets/images/images";
import { FaHome } from "react-icons/fa";

const OffersPage = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2">
        <img className="w-full h-full object-cover" src={login} alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center relative">
        <img src={logoBlue} alt="" />
        <h1 className="text-3xl text-blue-500 font-semibold">Bienvenue</h1>
        <Link
          to="/offers/add"
          className="bg-blue-500 py-3 w-64 text-center text-white rounded-lg my-8"
        >
          Démarrer
        </Link>
        <Link
          className="text-blue-500 flex items-center gap-2 underline absolute bottom-8"
          to="/"
        >
          <FaHome />
          <p>Revenir à l'accueil</p>
        </Link>
      </div>
    </div>
  );
};

export default OffersPage;
