import React, { useState } from "react";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import Navbar from "../Home/Navbar";
import avatar from "../../assets/images/avatar1.png";
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import authService from "../../services/auth.service";
import { useEffect } from "react";
import usersService from "../../services/users.service";
import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
  const [show, setShow] = useState(false);
  const [singleUser, setSingleUser] = useState({});
  const [token, setToken] = useState(null);

  useEffect(async () => {
    setToken(authService.getUserToken());

    const userId = await authService.getUserId();

    await usersService
      .getUser(Number(userId))
      .then((user) => setSingleUser(user.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <HomeLayout>
      <Navbar className="py-4" />
      <h1 className="text-xl font-bold mb-5">Profil</h1>
      {token ? (
        singleUser.gender == null ? (
          <ProfileForm />
        ) : (
          <div className={`${!show ? "h-[78vh]" : "h-full"}`}>
            <div className="w-2/3 mx-auto flex flex-row py-4">
              <img
                className="w-56 h-56 rounded-md object-cover"
                src={
                  singleUser.profile_avatar
                    ? `http://localhost:4000/${singleUser.profile_avatar}`
                    : avatar
                }
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
                      ? `${
                          new Date(Date.now()).getFullYear() -
                          new Date(singleUser.birthdate).getFullYear()
                        } ans`
                      : "Année"}
                  </h2>
                </div>
                <div>
                  <p className="flex flex-row items-center gap-3">
                    <FaMapMarkerAlt />
                    {singleUser.adress ? singleUser.adress : "Adresse"}{" "}
                    {singleUser.city ? singleUser.city : "Ville"}{" "}
                    {singleUser.postal_code
                      ? singleUser.postal_code
                      : "code postal"}
                    ,{singleUser.region ? singleUser.region : "region"},{" "}
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
                  {singleUser["about"]
                    ? singleUser["about"]
                    : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  vitae, provident repudiandae fugiat error vel natus totam
                  excepturi cumque inventore debitis eum. Veritatis quia
                  recusandae consequatur unde libero sapiente placeat! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Totam dolore ex a
                  ratione, amet inventore dicta deserunt! Ipsum, deserunt sapiente
                  corrupti non error beatae magnam voluptatibus veniam nostrum
                  illum. Numquam.`}
                </p>
              </div>
            </div>
          </div>
        )
      ) : (
        <p className="h-[75vh] flex flex-row justify-center items-center text-xl">
          Veuillez vous connecter, s'il vous plaît
        </p>
      )}
      {show && <ProfileForm />}
    </HomeLayout>
  );
};

export default ProfilePage;
