import React, { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import states from "@/states";
import UserService from "@/services/users.service";
import Title from "@/components/Title";
import HouseCard from "@/components/Card/HouseCard";

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
        <div className="flex flex-row justify-evenly items-center flex-wrap">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 8, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
          ].map((house, index) => {
            return <HouseCard key={index} />;
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
