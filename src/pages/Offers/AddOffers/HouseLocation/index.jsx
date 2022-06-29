import React from "react";
import OffersLayout from "../../../../layouts/OffersLayout/OffersLayout";

const HouseLocation = ({ nextButton, prevButton, handleChange, step }) => {
  return (
    <OffersLayout step={step} nextButton={nextButton} prevButton={prevButton}>
      <div className="flex w-full h-full">
        <div className="w-1/2 bg-gradient-to-b from-blue-500 to-emerald-300 flex flex-col justify-center items-center">
          <p className="text-3xl px-8 text-center text-white">
            Où se trouve votre logement ?
          </p>
        </div>
        <div className="w-1/2 flex gap-4 flex-col justify-center items-center">
          <label htmlFor="">
            Ville
            <input
              className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="ex: Mahajanga"
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </label>
          <label htmlFor="">
            Code postal
            <input
              className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="ex: 401"
              onChange={(e) => handleChange("postalCode", e.target.value)}
            />
          </label>
          <label htmlFor="">
            Region
            <input
              className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="ex: Boeny"
              onChange={(e) => handleChange("region", e.target.value)}
            />
          </label>
          <label htmlFor="">
            Pays
            <input
              className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="ex: Madagascar"
              onChange={(e) => handleChange("country", e.target.value)}
            />
          </label>
          <label htmlFor="">
            Adresse
            <input
              className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="ex: Lot 220 Parcelle 2345 Antanimalandy"
              onChange={(e) => handleChange("adress", e.target.value)}
            />
          </label>
        </div>
      </div>
    </OffersLayout>
  );
};

export default HouseLocation;
