import React from "react";
import OffersLayout from "../../../../layouts/OffersLayout/OffersLayout";

const HouseLabel = ({ nextButton, prevButton, handleChange, values, step }) => {
  return (
    <OffersLayout step={step} nextButton={nextButton} prevButton={prevButton}>
      <div className="flex w-full h-full">
        <div className="w-1/2 bg-gradient-to-b from-blue-500 to-emerald-300 flex flex-col justify-center items-center">
          <p className="text-3xl px-8 text-center text-white">
            Donnez un nom et une description pour votre logement
          </p>
        </div>
        <div className="w-1/2 flex gap-4 flex-col justify-center items-center">
          <label htmlFor="">
            Nom de votre logement
            <input
              className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Villa Belle Vue"
              onChange={(e) => {
                handleChange("label", e.target.value);
                console.log(values);
              }}
            />
          </label>
          <label htmlFor="">
            Description
            <textarea
              className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Veuillez décrire précisement votre logement: types de pièces, apparence génerale, équipements particuliers, ..."
            />
          </label>
        </div>
      </div>
    </OffersLayout>
  );
};

export default HouseLabel;
