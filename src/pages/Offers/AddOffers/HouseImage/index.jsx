import React, { useState } from "react";
import OffersLayout from "../../../../layouts/OffersLayout/OffersLayout";
import axios from "axios";

const HouseImage = ({ prevButton, nextButton, step, handleChange, values }) => {
  const [imgCollection, setImgCollection] = useState("");

  const onFileChange = (e) => {
    setImgCollection({ imgCollection: e.target.files });
    console.log(imgCollection);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    for (const key of Object.keys(imgCollection)) {
      formData.append("imgCollection", imgCollection[key]);
    }
    axios
      .post("http://localhost:4000/api/v1/images", formData, {})
      .then((res) => {
        console.log(res.data);
      });
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
          <form onSubmit={onSubmit} className="flex flex-col items-center">
            <h3 className="my-4">Images</h3>

            <input
              type="file"
              name="imgCollection"
              onChange={onFileChange}
              multiple
            />

            <button
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
