import React from "react";
import OffersLayout from "../../../../layouts/OffersLayout/OffersLayout";

const HousePrice = ({ nextButton, prevButton, handleChange, step }) => {
  return (
    <OffersLayout step={step} nextButton={nextButton} prevButton={prevButton}>
      <div className="flex w-full h-full">
        <div className="w-1/2 bg-gradient-to-b from-blue-500 to-emerald-300 flex flex-col justify-center items-center">
          <p className="text-3xl px-8 text-center text-white">
            Combien coûte votre loyer ?
          </p>
        </div>
        <div className="w-1/2 flex gap-4 flex-col justify-center items-center">
          <label htmlFor="" className="">
            Loyer
            <div className="flex">
              <p className="p-2 text-white bg-blue-500 w-20 text-center rounded-l-lg">
                MGA
              </p>
              <input
                className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="En MGA"
                onChange={(e) => handleChange("rentPrice", e.target.value)}
              />
            </div>
          </label>
        </div>
      </div>
    </OffersLayout>
  );
};

export default HousePrice;
