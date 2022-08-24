import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { logoBlue } from "../../assets/images/images";
import { FaBars, FaSearch } from "react-icons/fa";
import HousesServices from "../../services/houses.services";
import states from "../../states";
import { MainContext } from "../../providers/main.provider";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

const Navbar = ({ className }) => {
  let { input, houseResults } = states;
  let { setHouses } = useContext(MainContext);
  let navigate = useNavigate();

  return (
    <div className={`${className} flex justify-between items-center relative`}>
      <Link to="/" className="flex items-center">
        <img src={logoBlue} className="w-10 h-10" alt="Logo of Mpanera" />
        <h1 className="text-blue-500 font-bold">Mpanera</h1>
      </Link>
      <div className="flex items-center">
        <input
          className="h-8 pl-4 focus:ring-blue-500 focus:ring-2 placeholder:text-slate-500 placeholder:text-sm rounded-2xl outline-none border-none ring-1 ring-slate-200 shadow-lg"
          type={"text"}
          placeholder="Entrer le nom d'une ville"
          onChange={(e) => {
            input["city"] = e.target.value;
          }}
          onFocusCapture={() => navigate("/")}
        />
        <button
          onClick={async () => {
            await HousesServices.getHousesByCityName(input.city)
              .then((response) => {
                //houseResults = response.data.results;
                setHouses(response.data.results);
              })
              .catch((error) => console.error(error))
              .finally(() => console.log("Completed"));
          }}
          className="p-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white shadow-lg rounded-full text-sm"
        >
          <FaSearch />
        </button>
      </div>
      <div className="flex flex-row items-center">
        <button
          onClick={async () => {
            await navigate("/offers");
            await window.location.reload();
          }}
          className="py-2 px-4 mr-4 hover:bg-blue-600 hover:text-white bg-sky-200 rounded-full text-sm text-blue-500 font-bold"
        >
          Publier une offre
        </button>
        <div className="flex gap-x-3 text-blue-500 font-semibold">
          <Link to="/account" className="text-sm">
            Compte
          </Link>
          <button
            onClick={async () => {
              await navigate("/profile");
              await window.location.reload();
            }}
            className="text-sm text-blue-500 font-bold"
          >
            Profil
          </button>
          <Link to="/register" className="text-sm">
            Inscription
          </Link>
          {AuthService.getUserToken() ? (
            <button
              className="text-gray-500 text-sm font-semibold"
              onClick={async () => {
                await AuthService.logout();
                window.location.reload();
              }}
            >
              Déconnexion
            </button>
          ) : (
            <Link to="/login" className="text-sm">
              Connexion
            </Link>
          )}
        </div>
        {/* <button
          onClick={() => setToggleModal((toggleModal) => !toggleModal)}
          className="p-2 ml-2 ring-1 ring-slate-200 rounded-lg bg-white shadow-lg"
        >
          <FaBars />
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
