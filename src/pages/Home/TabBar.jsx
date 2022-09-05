import React, { useContext } from "react";
import { FaSlidersH } from "react-icons/fa";
import { MainContext } from "../../providers/main.provider";
import states from "../../states";

const TabBar = ({ className }) => {
  const { houseType, setHouseType } = useContext(MainContext);

  return (
    <div className={`${className} flex justify-between items-center my-2`}>
      <div className="flex">
        <button
          onClick={() => setHouseType("maisons")}
          className={`${
            houseType === "maisons"
              ? "bg-blue-500 text-white"
              : "text-blue-500 bg-white"
          } w-40 py-2 rounded-md border-r-2  font-semibold border-slate-200`}
        >
          Maisons
        </button>
        <button
          onClick={() => setHouseType("appartements")}
          className={`${
            houseType === "appartements"
              ? "bg-blue-500 text-white"
              : "text-blue-500 bg-white"
          } w-40 py-2 rounded-md border-r-2  font-semibold border-slate-200`}
        >
          Appartements
        </button>
        <button
          onClick={() => setHouseType("villas")}
          className={`${
            houseType === "villas"
              ? "bg-blue-500 text-white"
              : "text-blue-500 bg-white"
          } w-40 py-2 rounded-md border-r-2  font-semibold border-slate-200`}
        >
          Villas
        </button>
        {/*  <button
          onClick={() => setHouseType("pavillons")}
          className={`${
            houseType === "pavillons"
              ? "bg-blue-500 text-white"
              : "text-blue-500 bg-white"
          } w-40 py-2 rounded-md border-r-2  font-semibold border-slate-200`}
        >
          Pavillons
        </button>
        <button
          onClick={() => setHouseType("bungalows")}
          className={`${
            houseType === "bungalows"
              ? "bg-blue-500 text-white"
              : "text-blue-500 bg-white"
          } w-40 py-2 rounded-md border-r-2  font-semibold border-slate-200`}
        >
          Bungalows
        </button> */}
      </div>
      {/* <button className="flex items-center gap-2 shadow-lg px-4 py-2 rounded-lg ring-1 ring-slate-200">
        <FaSlidersH /> Filtres
      </button> */}
      <div className="flex">
        <label className="bg-blue-500 block w-32 text-white px-4 py-2 text-center rounded-l-md font-semibold">
          Loyer
        </label>
        <input
          className="h-10 pl-4 focus:ring-blue-500 focus:ring-2 placeholder:text-slate-500 placeholder:text-sm rounded-r-md outline-none border-none ring-1 ring-slate-200"
          type="number"
          name="searchRentPrice"
          id="searchRentPrice"
          placeholder="Loyer en MGA"
          onChange={(e) => {
            states.input["searchRentPrice"] = Number(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default TabBar;
