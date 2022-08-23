import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useSnapshot } from "valtio";
import Input, { TextArea } from "../../../components/Input";
import HomeLayout from "../../../layouts/HomeLayout/HomeLayout";
import housesServices from "../../../services/houses.services";
import states from "../../../states";
import Navbar from "../../Home/Navbar";

const UpdateOffers = () => {
  const { id } = useParams();
  const [houseType, setHouseType] = useState("");
  const [houseState, setHouseState] = useState("");
  const [publishedOn, setPublishedOn] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [userId, setUserId] = useState(null);
  const [imgCollection, setImgCollection] = useState([]);

  let navigate = useNavigate();

  const snapshot = useSnapshot(states);

  useEffect(async () => {
    await housesServices
      .getHouse(id)
      .then((response) => {
        setHouseType(response.data.results.house_type);
        setHouseState(response.data.results.state);
        setPublishedOn(response.data.results.published_on);
        setUserId(response.data.results.user_id);
        setOpenDate(response.data.results.open_date);

        states.input.accountLabel = response.data.results.label;
        states.input.accountPrice = response.data.results.rent_price;
        states.input.accountRoomNumber = response.data.results.rooms_number;
        states.input.accountPostalCode = response.data.results.postal_code;
        states.input.accountArea = response.data.results.area;
        states.input.accountCity = response.data.results.city;
        states.input.accountRegion = response.data.results.region;
        states.input.accountCountry = response.data.results.country;
        states.input.accountAdress = response.data.results.adress;
        states.input.accountPaymentDate = response.data.results.end_date;
        states.input.accountDescription = response.data.results.description;

        console.log(response.data.results);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("Getting house done"));
  }, []);

  return (
    <HomeLayout>
      <Navbar className="py-4" />
      <h2 className="text-lg font-bold text-center mb-4">
        Veuillez remplir les champs suivants
      </h2>
      <form>
        <div className="grid grid-cols-4 gap-3">
          <label htmlFor="accountLabel">
            Label
            <Input
              type="text"
              id="accountLabel"
              placeholder="Label"
              name="accountLabel"
              value={snapshot.input.accountLabel}
            />
          </label>
          <label className="flex flex-col" htmlFor="accountHouseType">
            Type de logements
            <select
              className="rounded-md border-gray-500 border-2"
              name="accountHouseType"
              id="accountHouseType"
              onChange={(e) => {
                setHouseType(e.target.value);
              }}
              value={houseType}
            >
              <option>Choisir votre type de logements</option>
              <option value="maisons">Maisons</option>
              <option value="appartements">Appartements</option>
              <option value="villas">Villas</option>
            </select>
          </label>
          <label htmlFor="accountPrice">
            Loyer
            <Input
              type="number"
              id="accountPrice"
              placeholder="Loyer"
              name="accountPrice"
              value={snapshot.input.accountPrice}
            />
          </label>
          <label className="flex flex-col" htmlFor="accountHouseState">
            Etat du logement
            <select
              className="rounded-md border-gray-500 border-2"
              name="accountHouseState"
              id="accountHouseState"
              onChange={(e) => {
                setHouseState(e.target.value);
              }}
              value={houseState}
            >
              <option>Choisir l'état du logement</option>
              <option value="En excellent état">En excellent état</option>
              <option value="En bon état" defaultValue="En bon état">
                En bon état
              </option>
              <option value="En mauvais état">En mauvais état</option>
              <option value="En très mauvais état">En très mauvais état</option>
            </select>
          </label>
          <label htmlFor="accountRoomNumber">
            Nombre de pièces
            <Input
              type="number"
              id="accountRoomNumber"
              placeholder="Nombre de pièces"
              name="accountRoomNumber"
              value={snapshot.input.accountRoomNumber}
            />
          </label>
          <label htmlFor="accountArea">
            Superficie
            <Input
              type="text"
              id="accountArea"
              placeholder="Superficie"
              name="accountArea"
              value={snapshot.input.accountArea}
            />
          </label>
          <label htmlFor="accountAdress">
            Adresse
            <Input
              type="text"
              id="accountAdress"
              placeholder="Adresse"
              name="accountAdress"
              value={snapshot.input.accountAdress}
            />
          </label>
          <label htmlFor="accountPostalCode">
            Code postal
            <Input
              type="number"
              id="accountPostalCode"
              placeholder="Code postal"
              name="accountPostalCode"
              value={snapshot.input.accountPostalCode}
            />
          </label>
          <label htmlFor="accountCity">
            Ville
            <Input
              type="text"
              id="accountCity"
              placeholder="Ville"
              name="accountCity"
              value={snapshot.input.accountCity}
            />
          </label>
          <label htmlFor="accountRegion">
            Région
            <Input
              type="text"
              id="accountRegion"
              placeholder="Région"
              name="accountRegion"
              value={snapshot.input.accountRegion}
            />
          </label>
          <label htmlFor="accountCountry">
            Pays
            <Input
              type="text"
              id="accountCountry"
              placeholder="Pays"
              name="accountCountry"
              value={snapshot.input.accountCountry}
            />
          </label>
          <label htmlFor="accountPaymentDate">
            Date butoire de paiement
            <Input
              type="number"
              id="accountPaymentDate"
              placeholder="Date butoire de paiement"
              name="accountPaymentDate"
              value={snapshot.input.accountPaymentDate}
            />
          </label>
          <label htmlFor="accountDescription" className="flex flex-col">
            Description
            <TextArea
              rows="10"
              id="accountDescription"
              name="accountDescription"
              placeholder="Description"
              value={snapshot.input.accountDescription}
            ></TextArea>
          </label>
          <label htmlFor="accountHousePhotos">
            Photos du logement
            <input
              type="file"
              name="imgCollection"
              id="accountHousePhotos"
              className="border-none"
              multiple
              onChange={(e) => setImgCollection(e.target.files)}
            />
          </label>
        </div>
        <button
          className="bg-blue-500 w-full text-white px-3 py-2 my-6 rounded-md"
          onClick={async (e) => {
            e.preventDefault();
            const houseData = {
              label: snapshot.input.accountLabel,
              rent_price: snapshot.input.accountPrice,
              rooms_number: snapshot.input.accountRoomNumber,
              postal_code: snapshot.input.accountPostalCode,
              area: snapshot.input.accountArea,
              city: snapshot.input.accountCity,
              region: snapshot.input.accountRegion,
              country: snapshot.input.accountCountry,
              adress: snapshot.input.accountAdress,
              end_date: snapshot.input.accountPaymentDate,
              description: snapshot.input.accountDescription,
              house_type: houseType,
              state: houseState,
              published_on: publishedOn,
              user_id: userId,
              open_date: openDate,
            };

            await housesServices
              .updateHouse(id, houseData)
              .then(async (res) => {
                console.log(res.data);
                await toast.success("Données mises à jour");
                /*  setTimeout(() => {
                  window.location.reload();
                }, 2000); */
              })
              .catch((error) => console.error(error))
              .finally(() => console.log("Updating house done"));

            var formData = new FormData();

            for (const key of Object.keys(imgCollection)) {
              formData.append("imgCollection", imgCollection[key]);
              console.log(imgCollection[key]);
            }

            formData.append("house_id", id);

            await housesServices
              .uploadImages(formData)
              .then((response) => {
                console.log(response.data);
                //toast.success("Photos ajoutées");
              })
              .catch((error) => console.error(error));

            //navigate("/account");
          }}
        >
          Valider
        </button>
      </form>
    </HomeLayout>
  );
};

export default UpdateOffers;
