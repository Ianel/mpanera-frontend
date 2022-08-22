import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import OffersLayout from "../../../../layouts/OffersLayout/OffersLayout";
import { MainContext } from "../../../../providers/main.provider";
import HousesServices from "../../../../services/houses.services";

const HouseImage = ({ prevButton, nextButton, step, handleChange, values }) => {
  const [imgCollection, setImgCollection] = useState("");
  const [images, setImages] = useState([]);
  const [imagesURLs, setImagesURLs] = useState([]);

  let navigate = useNavigate();

  const { houseId, setHouseId } = useContext(MainContext);

  useEffect(() => {
    if (images.length < 1) return;
    const newImagesURLs = [];
    images.forEach((image) => newImagesURLs.push(URL.createObjectURL(image)));
    setImagesURLs(newImagesURLs);
  }, [images]);

  const onFileChange = (e) => {
    setImgCollection(e.target.files);
    setImages([...e.target.files]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();

    for (const key of Object.keys(imgCollection)) {
      formData.append("imgCollection", imgCollection[key]);
      //console.log(imgCollection[key]);
    }

    formData.append("house_id", houseId);

    //actions.toggleLoader();
    HousesServices.uploadImages(formData)
      .then((response) => {
        console.log(response.data);
        toast.success("Photos ajoutées");
        //actions.toggleLoader();
      })
      .catch((error) => console.error(error));
  };

  return (
    <OffersLayout
      step={step}
      prevButton={prevButton}
      nextButton={() => {
        navigate("/");
      }}
    >
      <div className="flex w-full h-full">
        <div className="w-1/2 bg-gradient-to-b from-blue-500 to-emerald-300 flex flex-col justify-center items-center">
          <p className="text-3xl px-8 text-center text-white">
            Entrez au moins 5 images
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

            <input type="hidden" name="house_id" defaultValue={houseId} />

            <div className="flex flex-row flex-wrap gap-3 mt-5">
              {imagesURLs.map((imageSrc, index) => (
                <img
                  className="w-24 h-24"
                  src={imageSrc}
                  key={new Date() * index}
                  alt="images"
                />
              ))}
            </div>

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
