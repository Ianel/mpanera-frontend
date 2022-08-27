import React, { useContext } from "react";
import OffersLayout from "../../../../layouts/OffersLayout/OffersLayout";
import { MainContext } from "../../../../providers/main.provider";
import servicesService from "../../../../services/services.service";

const HouseEquipments = ({
  nextButton,
  prevButton,
  handleChange,
  values,
  step,
}) => {
  const { houseId } = useContext(MainContext);

  let dataForServices = {
    interior_toilets: values.interior_toilets,
    outdoor_toilets: values.outdoor_toilets,
    running_water: values.running_water,
    garage: values.garage,
    garden: values.garden,
    swimming_pool: values.swimming_pool,
    house_id: houseId,
  };

  return (
    <OffersLayout
      step={step}
      nextButton={async (e) => {
        await servicesService
          .addServices(dataForServices)
          .then((res) => console.log(res.data))
          .catch((error) => console.error(error))
          .finally(() => console.log("Services added"));

        nextButton(e);
      }}
      prevButton={prevButton}
    >
      <div className="flex w-full h-full">
        <div className="w-1/2 bg-gradient-to-b from-blue-500 to-emerald-300 flex flex-col justify-center items-center">
          <p className="text-3xl px-8 text-center text-white">
            Quels équipements sont présents dans votre logement ?
          </p>
        </div>
        <div className="w-1/2 flex gap-4 flex-col justify-center items-center">
          <label htmlFor="interior_toilets">
            Toilettes intérieures{" "}
            <input
              type="checkbox"
              name="interior_toilets"
              id="interior_toilets"
              onChange={(e) => handleChange("interior_toilets", e.target.value)}
            />
          </label>
          <label htmlFor="outdoor_toilets">
            Toilettes extérieures{" "}
            <input
              type="checkbox"
              name="outdoor_toilets"
              id="outdoor_toilets"
              onChange={(e) => handleChange("outdoor_toilets", e.target.value)}
            />
          </label>
          <label htmlFor="garage">
            Garage{" "}
            <input
              type="checkbox"
              name="garage"
              id="garage"
              onChange={(e) => handleChange("garage", e.target.value)}
            />
          </label>
          <label htmlFor="garden">
            Jardin{" "}
            <input
              type="checkbox"
              name="garden"
              id="garden"
              onChange={(e) => handleChange("garden", e.target.value)}
            />
          </label>
          <label htmlFor="running_water">
            Eau courante{" "}
            <input
              type="checkbox"
              name="running_water"
              id="running_water"
              onChange={(e) => handleChange("running_water", e.target.value)}
            />
          </label>
          <label htmlFor="swimming_pool">
            Piscine{" "}
            <input
              type="checkbox"
              name="swimming_pool"
              id="swimming_pool"
              onChange={(e) => handleChange("swimming_pool", e.target.value)}
            />
          </label>
        </div>
      </div>
    </OffersLayout>
  );
};

export default HouseEquipments;
