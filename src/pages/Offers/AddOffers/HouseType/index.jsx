import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OffersLayout from "../../../../layouts/OffersLayout/OffersLayout";

const HouseType = ({ nextButton, handleChange, step }) => {
  let navigate = useNavigate();
  const [selected, setSelected] = useState("");

  return (
    <OffersLayout
      step={step}
      nextButton={nextButton}
      prevButton={() => navigate("/offers")}
    >
      <div className="flex w-full h-full">
        <div className="w-1/2 bg-gradient-to-b from-blue-500 to-emerald-300 flex flex-col justify-center items-center">
          <p className="text-3xl px-8 text-center text-white">
            Quel type de logement proposez-vous ?
          </p>
        </div>
        <div className="w-1/2 flex gap-4 flex-col justify-center items-center">
          <button
            value="maisons"
            onClick={(e) => {
              handleChange("category", e.target.value);
              setSelected("maisons");
            }}
            className={`${
              selected == "maisons" ? "bg-cyan-500 text-white" : ""
            } w-2/3 ring-1 ring-slate-400 py-4 text-center rounded-lg`}
          >
            Maisons
          </button>
          <button
            value="appartements"
            onClick={(e) => {
              handleChange("category", e.target.value);
              setSelected("appartements");
            }}
            className={`${
              selected == "appartements" ? "bg-cyan-500 text-white" : ""
            } w-2/3 ring-1 ring-slate-400 py-4 text-center rounded-lg`}
          >
            Appartements
          </button>
          <button
            value="villas"
            onClick={(e) => {
              handleChange("category", e.target.value);
              setSelected("villas");
            }}
            className={`${
              selected == "villas" ? "bg-cyan-500 text-white" : ""
            } w-2/3 ring-1 ring-slate-400 py-4 text-center rounded-lg`}
          >
            Villas
          </button>
        </div>
      </div>
    </OffersLayout>
  );
};

export default HouseType;
