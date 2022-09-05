import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import HousesServices from "../../services/houses.services";
import { MainContext } from "../../providers/main.provider";
import TabBar from "./TabBar";
import Navbar from "./Navbar";
import { useSnapshot } from "valtio";
import states from "../../states";

const HomePage = () => {
  //let snapshot = useSnapshot(states);
  let { houses, setHouses, houseType } = useContext(MainContext);
  const snapshot = useSnapshot(states);

  useEffect(async () => {
    await HousesServices.getAllHouses()
      .then((response) => {
        //states.houseResults = response.data.results;
        setHouses(response.data.results);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("Completed"));
  }, []);

  return (
    <HomeLayout>
      <Navbar className="py-4" />
      <TabBar className="py-2" />
      <div className="flex flex-wrap justify-start gap-x-8 h-[75vh]">
        {/* {snapshot.houseResults.map((house, index) => {
          return <Card key={new Date() * index} />;
        })} */}
        {/* {houses.map((house, index) => {
          return <Card house={house} key={new Date() * index} />;
        })} */}
        {houses
          .filter(
            (house) =>
              house.house_type === houseType && house.is_house_active === true
          )
          .filter(
            (house) =>
              house.rent_price <= (snapshot.input.searchRentPrice || 500000000)
          )
          .map((house, index) => {
            return <Card house={house} key={new Date() * index} />;
          })}
        {/* // Exemple de consommation d'image
        <img
          src={"http://localhost:4000/1659364484115maison-5.png"}
          alt="backend_image_example"
        />
        // Ou sinon par background image
        <div
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: `url("http://localhost:4000/1659364484115maison-5.png")`,
          }}
        ></div> */}
      </div>
    </HomeLayout>
  );
};

export default HomePage;
