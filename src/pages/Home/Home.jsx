import React, { useEffect } from "react";
import MainLayout from "layouts/MainLayout";
import states from "states";
import { mac } from "assets/images/images";
import UserService from "services/users.service";
import Title from "components/Title";

const HomePage = () => {
  useEffect(() => {
    states.selectedLink = "accueil";

    const service = new UserService();
    service
      .getAllUsers()
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(() => console.log("Completed"));
  }, []);

  return (
    <MainLayout>
      <div className="pb-10">
        <div className="text-center p-8">
          <h1>Mpanera</h1>
          <p>La plateforme N°1 dans la recherche d'immobiliers</p>
        </div>
        <div className="px-8 flex lg:flex-row lg:justify-between lg:items-center flex-wrap gap-y-8">
          <Title type="h2">Hello</Title>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
