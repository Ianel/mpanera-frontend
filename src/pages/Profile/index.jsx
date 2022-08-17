import React, { useState } from "react";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import Navbar from "../Home/Navbar";
import avatar from "../../assets/images/avatar1.png";
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import Input, { TextArea } from "../../components/Input";
import authService from "../../services/auth.service";
import { useEffect } from "react";
import usersService from "../../services/users.service";
import states from "../../states";
import toast from "react-hot-toast";
import { useSnapshot } from "valtio";

const ProfilePage = () => {
  const [show, setShow] = useState(false);
  const [singleUser, setSingleUser] = useState({});

  useEffect(async () => {
    const userId = await authService.getUserId();

    await usersService
      .getUser(userId)
      .then((user) => setSingleUser(user.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <HomeLayout>
      <Navbar className="py-4" />
      {authService.getUserToken() ? (
        <>
          <div className="w-2/3 mx-auto flex flex-row py-4">
            <img
              className="w-56 h-56 rounded-md"
              src={avatar}
              alt="profile image"
            />
            <div className="flex flex-col justify-between px-6 w-full">
              <div>
                <div className="flex flex-row justify-between items-center">
                  <h1 className="text-2xl font-bold">
                    {singleUser.firstname ? singleUser.firstname : "Prénom"}{" "}
                    {singleUser.lastname ? singleUser.lastname : "Nom"}
                  </h1>
                  <button
                    onClick={() => setShow((show) => !show)}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md"
                  >
                    Modifier le profil
                  </button>
                </div>
                <h2 className="py-2">
                  {singleUser.gender ? singleUser.gender : "Genre"} -{" "}
                  {singleUser.birthdate
                    ? new Date(Date.now()).getFullYear() -
                      new Date(singleUser.birthdate).getFullYear()
                    : "Année"}
                </h2>
              </div>
              <div>
                <p className="flex flex-row items-center gap-3">
                  <FaMapMarkerAlt />
                  {singleUser.adress ? singleUser.adress : "Adresse"}{" "}
                  {singleUser.region ? singleUser.region : "region"}{" "}
                  {singleUser.city ? singleUser.city : "Ville"}{" "}
                  {singleUser.postal_code
                    ? singleUser.postal_code
                    : "code postal"}{" "}
                  {singleUser.country ? singleUser.country : "pays"}
                </p>
                <p className="flex flex-row items-center gap-3">
                  <FaPhoneAlt />{" "}
                  {singleUser["phone_number"]
                    ? singleUser["phone_number"]
                    : "numero de telephone"}
                </p>
                <p className="flex flex-row items-center gap-3">
                  <FaEnvelope />{" "}
                  {singleUser["email"] ? singleUser["email"] : "email"}
                </p>
                <p className="flex flex-row items-center gap-3">
                  <FaFacebook />{" "}
                  {singleUser["facebook_name"]
                    ? singleUser["facebook_name"]
                    : "nom facebook"}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-primaryWhite">
            <div className="w-2/3 py-4 mx-auto">
              <h2 className="text-lg font-bold">A propos</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                vitae, provident repudiandae fugiat error vel natus totam
                excepturi cumque inventore debitis eum. Veritatis quia
                recusandae consequatur unde libero sapiente placeat! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Totam dolore ex a
                ratione, amet inventore dicta deserunt! Ipsum, deserunt sapiente
                corrupti non error beatae magnam voluptatibus veniam nostrum
                illum. Numquam.
              </p>
            </div>
          </div>
        </>
      ) : (
        <p className="h-[75vh] flex flex-row justify-center items-center text-2xl">
          Veuillez vous connecter
        </p>
      )}
      {show && <ProfileForm />}
    </HomeLayout>
  );
};

const ProfileForm = () => {
  const [gender, setGender] = useState("");
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState({});

  const snapshot = useSnapshot(states);

  useEffect(async () => {
    const id = await authService.getUserId();
    setUserId(id);

    await usersService
      .getUser(id)
      .then((user) => setUser(user.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-2/3 mx-auto my-5">
      <h2 className="text-lg font-bold text-center mb-4">
        Veuillez remplir les champs suivants
      </h2>
      <form>
        <div className="grid grid-cols-2 gap-3">
          <label htmlFor="lastname" className="flex flex-col">
            Nom
            <Input
              id="lastname"
              name="profileLastname"
              type="text"
              placeholder="Nom"
            />
          </label>
          <label htmlFor="firstname" className="flex flex-col">
            Prenom
            <Input
              id="firstname"
              name="profileFirstname"
              type="text"
              placeholder="Prénom"
            />
          </label>
          <label htmlFor="gender" className="flex flex-col">
            Sexe
            <select
              className="rounded-md border-gray-500 border-2"
              name="sexe"
              id="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option>Choisir votre sexe</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </label>
          <label htmlFor="birthdate" className="flex flex-col">
            Date de naissance
            <Input id="birthdate" name="profileBirthdate" type="date" />
          </label>
          <label htmlFor="city" className="flex flex-col">
            Ville
            <Input
              id="city"
              name="profileCity"
              type="text"
              placeholder="Ville"
            />
          </label>
          <label htmlFor="postalCode" className="flex flex-col">
            Code postal
            <Input
              id="postalCode"
              name="profilePostalCode"
              type="text"
              placeholder="Code postal"
            />
          </label>
          <label htmlFor="region" className="flex flex-col">
            Région
            <Input
              id="region"
              name="profileRegion"
              type="text"
              placeholder="Région"
            />
          </label>
          <label htmlFor="country" className="flex flex-col">
            Pays
            <Input
              id="country"
              name="profileCountry"
              type="text"
              placeholder="Pays"
            />
          </label>
          <label htmlFor="adress" className="flex flex-col">
            Adresse
            <Input
              id="adress"
              name="profileAdress"
              type="text"
              placeholder="Adresse"
            />
          </label>
          <label htmlFor="phoneNumber" className="flex flex-col">
            Numéro de télephone
            <Input
              id="phoneNumber"
              type="tel"
              name="profilePhoneNumber"
              placeholder="Numéro de télephone"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            Email
            <Input
              id="email"
              name="profileEmail"
              type="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="facebook_name" className="flex flex-col">
            Nom facebook
            <Input
              id="facebook_name"
              name="profileFacebookName"
              type="text"
              placeholder="Nom Facebook"
            />
          </label>
          <label htmlFor="profilePicture" className="flex flex-col">
            Photo de profil
            <Input
              id="profilePicture"
              name="profilePicture"
              type="file"
              className="border-none"
            />
          </label>
          <label htmlFor="city" className="flex flex-col">
            A propos
            <TextArea name="profileAbout" placeholder="A propos"></TextArea>
          </label>
        </div>
        <button
          onClick={() => {
            const userData = {
              user_id: userId,
              firstname: states.input.profileFirstname,
              lastname: states.input.profileLastname,
              gender: gender,
              birthdate: states.input.profileBirthdate,
              city: states.input.profileCity,
              postal_code: states.input.profilePostalCode,
              region: states.input.profileRegion,
              country: states.input.profileCountry,
              adress: states.input.profileAdress,
              phone_number: states.input.profilePhoneNumber,
              email: states.input.profileEmail,
              facebook_name: states.input.profileFacebookName,
              profile_picture: states.input.profilePicture,
              about: states.input.profileAbout,
            };

            usersService
              .updateUser(userId, userData)
              .then(() => {
                toast.success("Données modifiées");
                window.location.reload();
              })
              .catch((error) => toast.error(error.message));
          }}
          className="bg-blue-500 w-full text-white px-3 py-2 my-6 rounded-md"
        >
          Confirmer
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
