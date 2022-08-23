import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HousesServices from "../../services/houses.services";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import {
  FaBookmark,
  FaHome,
  FaLeaf,
  FaParking,
  FaRegBookmark,
  FaSwimmingPool,
  FaToilet,
  FaWater,
} from "react-icons/fa";
import { mac } from "../../assets/images/images";
import Navbar from "../Home/Navbar";
import usersService from "../../services/users.service";

const HouseDetail = () => {
  const { id } = useParams();
  const [house, setHouse] = useState({});
  const [housePhotos, setHousePhotos] = useState([]);
  const [author, setAuthor] = useState("");

  const PHOTO_URL = "http://localhost:4000";

  useEffect(async () => {
    await HousesServices.getHouse(id)
      .then(async (response) => {
        setHouse(response.data.results);

        await usersService
          .getUser(response.data.results.user_id)
          .then((user) => setAuthor(user.data.results))
          .catch((error) => console.error(error))
          .finally(() => console.log("Get author done"));

        await HousesServices.getHouseImagesById(
          response.data.results["house_id"]
        )
          .then((res) => {
            setHousePhotos(res.data.results);
            console.log(res.data);
          })
          .catch((error) => console.error(error))
          .finally(() => console.log("Done"));
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("Completed"));
  }, []);

  const [favorite, setFavorite] = useState(false);

  const paths = housePhotos.map((photo) => photo["path"]);

  return (
    <HomeLayout>
      <Navbar className="w-2/3 mx-auto py-4 relative z-20" />
      <div className="mx-auto py-4 w-2/3 relative z-10">
        <h1 className="font-semibold text-2xl leading-10">{house.label}</h1>
        <div className="flex justify-between items-center gap-x-4">
          <h2 className="underline">
            {house.adress}, {house.city} {house.postal_code}, {house.region},
            {house.country}
          </h2>
          {/* <button
            className="flex items-center cursor-pointer "
            onClick={() => setFavorite((favorite) => !favorite)}
          >
            {favorite ? <FaBookmark /> : <FaRegBookmark />}{" "}
            <span className="mx-2">Enregistrer</span>
          </button> */}
        </div>
        <div className="flex my-4 gap-2">
          {console.log(paths.reverse())}
          <img
            className="w-1/2 object-cover rounded-l-lg"
            src={`${PHOTO_URL}/${paths[0]}`}
            alt=""
          />
          <div className="w-1/2 flex flex-wrap gap-2">
            <img
              className="w-[49%] object-cover"
              src={`${PHOTO_URL}/${paths[1]}`}
              alt=""
            />
            <img
              className="w-[49%] object-cover rounded-tr-lg"
              src={`${PHOTO_URL}/${paths[2]}`}
              alt=""
            />
            <img
              className="w-[49%] object-cover"
              src={`${PHOTO_URL}/${paths[3]}`}
              alt=""
            />
            <img
              className="w-[49%] object-cover rounded-br-lg"
              src={`${PHOTO_URL}/${paths[4]}`}
              alt=""
            />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-medium">
            Chez {author.firstname}: {house.rooms_number} pièces
          </h3>
          {/*  <p className="text-zinc-700 ">
            1 chambre à coucher - 1 salon - 1 cuisine - 1 DC / WC
          </p> */}
        </div>
        <hr className="my-8" />
        <div className="flex gap-6 justify-between">
          <div className="flex flex-col justify-between items-start w-full">
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Description</h3>
              <p className="text-justify">{house.description}</p>
            </div>
            <div className="flex justify-start gap-4">
              <div className="w-40 h-32 ring-1 ring-slate-200 shadow-lg outline-none rounded-md flex flex-col justify-center items-center">
                <h3 className="font-semibold">A payer avant le: </h3>
                <p>{house.end_date} du mois</p>
              </div>
              <div className="w-40 h-32 ring-1 ring-slate-200 shadow-lg outline-none rounded-md flex flex-col justify-center items-center">
                <h3 className="font-semibold">Etat: </h3>
                <p>{house.state}</p>
              </div>
              <div className="w-40 h-32 ring-1 ring-slate-200 shadow-lg outline-none rounded-md flex flex-col justify-center items-center">
                <h3 className="font-semibold">Superficie: </h3>
                <p>
                  {house.area} m<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
          {/* <div className=" w-1/2 flex flex-row flex-wrap justify-center">
            <img
              className="object-cover w-1/2 rounded-tl-lg"
              src={mac}
              alt=""
            />
            <img
              className="object-cover w-1/2 rounded-tr-lg"
              src={mac}
              alt=""
            />
            <img
              className="object-cover w-1/2 rounded-bl-lg"
              src={mac}
              alt=""
            />
            <img
              className="object-cover w-1/2 rounded-br-lg"
              src={mac}
              alt=""
            />
          </div> */}
        </div>
        <hr className="my-8" />
        <div className="w-1/2">
          <h3 className="text-xl font-semibold my-4">
            Equipements du logement
          </h3>
          <div className="flex text-lg flex-wrap justify-start items-center gap">
            <p className=" leading-10 w-1/2 flex items-center gap-4">
              <FaWater /> Eau courante
            </p>
            <p className=" leading-10 w-1/2 flex items-center gap-4">
              <FaToilet /> Toietttes intérieures
            </p>
            <p className=" leading-10 w-1/2 flex items-center gap-4">
              <FaHome /> Garage
            </p>
            <p className=" leading-10 w-1/2 flex items-center gap-4">
              <FaParking /> Parking
            </p>
            <p className=" leading-10 w-1/2 flex items-center gap-4">
              <FaSwimmingPool /> Piscine
            </p>
            <p className=" leading-10 w-1/2 flex items-center gap-4">
              <FaLeaf /> Jardin
            </p>
          </div>
        </div>
        <hr className="my-8" />
        <div>
          <h3 className="text-2xl font-medium mb-6">
            Proposé par {author.firstname} {author.lastname}
          </h3>
          <div className="flex justify-start items-center gap-x-5">
            <div className="">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={`http://localhost:4000/${author.profile_avatar}`}
                alt=""
              />
            </div>
            <p className="w-1/2 text-justify">{author.about}</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default HouseDetail;
