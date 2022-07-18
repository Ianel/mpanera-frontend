import React, { useContext, useState } from "react";
import OffersLayout from "../../../../layouts/OffersLayout/OffersLayout";
import { MainContext } from "../../../../providers/main.provider";
import HousesServices from "../../../../services/houses.services";

const HouseImage = ({ prevButton, nextButton, step, handleChange, values }) => {
  const [imgCollection, setImgCollection] = useState("");

  const { houseId, setHouseId } = useContext(MainContext);

  const onFileChange = (e) => {
    setImgCollection({ imgCollection: e.target.files });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();

    for (const key of Object.keys(imgCollection)) {
      formData.append("imgCollection", imgCollection[key]);
      console.log(imgCollection[key]);
    }

    HousesServices.uploadImages({ house_path: formData, house_id: houseId })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <OffersLayout step={step} prevButton={prevButton} nextButton={nextButton}>
      <div className="flex w-full h-full">
        <div className="w-1/2 bg-gradient-to-b from-blue-500 to-emerald-300 flex flex-col justify-center items-center">
          <p className="text-3xl px-8 text-center text-white">
            Entrez au moins 9 images
          </p>
        </div>
        <div className="w-1/2 flex gap-4 flex-col justify-center items-center">
          <form
            encType="multipart/form-data"
            className="flex flex-col items-center"
          >
            <h3 className="my-4">Images</h3>

            <input
              type="file"
              name="imgCollection"
              onChange={onFileChange}
              multiple
            />

            <button
              onClick={onSubmit}
              className="rounded-lg bg-blue-500 text-white w-32 py-2 my-4"
              type="submit"
            >
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </OffersLayout>
  );
};

export default HouseImage;
