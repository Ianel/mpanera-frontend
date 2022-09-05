import React, { useEffect, useState } from "react";
import AccountCard from "../../components/Card/AccountCard";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import authService from "../../services/auth.service";
import housesServices from "../../services/houses.services";
import Navbar from "../Home/Navbar";

const AccountPage = () => {
  const [houses, setHouses] = useState([]);
  const userId = authService.getUserId();
  const [token, setToken] = useState(null);

  useEffect(async () => {
    await housesServices
      .getAllHouses()
      .then(async (response) => {
        setHouses(response.data.results);
        setToken(authService.getUserToken());
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("Completed"));
  }, []);

  return (
    <HomeLayout>
      <Navbar className="py-4" />
      <h1 className="text-xl font-bold mb-5">Compte</h1>
      <div className="mx-8">
        {!token ? (
          <h2 className="text-center mt-80 text-xl">
            Veuillez vous connecter, s'il vous plaît
          </h2>
        ) : (
          <div className="flex flex-wrap items-stretch justify-start gap-x-5 gap-y-5">
            {houses
              .filter((house) => house.user_id == userId)
              .map((house, index) => {
                return <AccountCard house={house} key={new Date() * index} />;
              })}
          </div>
        )}
      </div>
    </HomeLayout>
  );
};

export default AccountPage;
