import React, { useContext } from "react";
import OffersLayout from "../../../../layouts/OffersLayout/OffersLayout";
import { MainContext } from "../../../../providers/main.provider";
import AuthService from "../../../../services/auth.service";
import HousesServices from "../../../../services/houses.services";

const HouseMoreInfos = ({
  prevButton,
  nextButton,
  handleChange,
  values,
  step,
}) => {
  const userId = AuthService.getUserId();

  const { houseId, setHouseId } = useContext(MainContext);

  let dataForHouse = {
    area: values.area,
    label: values.label,
    city: values.city,
    postal_code: values.postalCode,
    region: values.region,
    country: values.country,
    adress: values.adress,
    rent_price: values.rentPrice,
    description: values.description,
    state: values.stateOf || "En excellent état",
    end_date: values.paymentDate,
    house_type: values.category,
    rooms_number: values.rooms_number,
    user_id: userId, // for test only
  };

  return (
    <OffersLayout
      step={step}
      nextButton={async (e) => {
        await HousesServices.createHouse(dataForHouse)
          .then((response) => {
            console.log(response.data.results);
            setHouseId(response.data.results.house_id);
          })
          .catch((error) => console.error(error));
        nextButton(e);
      }}
      prevButton={prevButton}
    >
      <div className="flex w-full h-full">
        <div className="w-1/2 bg-gradient-to-b from-blue-500 to-emerald-300 flex flex-col justify-center items-center">
          <p className="text-3xl px-8 text-center text-white">
            Quelques infos supplémentaires
          </p>
        </div>
        <div className="w-1/2 flex gap-4 flex-col justify-center items-center">
          <label htmlFor="" className="">
            Superficie du logement
            <div className="flex">
              <p className="p-2 text-white bg-blue-500 w-20 text-center rounded-l-lg">
                m<sup>2</sup>
              </p>
              <input
                className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="ex: 500"
                onChange={(e) => handleChange("area", e.target.value)}
              />
            </div>
          </label>
          <label htmlFor="">
            Etat
            <select
              onChange={(e) => handleChange("stateOf", e.target.value)}
              className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="En excellent état">En excellent état</option>
              <option value="En bon état" defaultValue="En bon état">
                En bon état
              </option>
              <option value="En mauvais état">En mauvais état</option>
              <option value="En très mauvais état">En très mauvais état</option>
            </select>
          </label>
          <label>
            Date butoire de paiement
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="ex: 20"
              onChange={(e) => handleChange("paymentDate", e.target.value)}
            />
          </label>
          <label>
            Nombre de pièces
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="ex: 4"
              onChange={(e) => handleChange("rooms_number", e.target.value)}
            />
          </label>
        </div>
      </div>
    </OffersLayout>
  );
};

export default HouseMoreInfos;
