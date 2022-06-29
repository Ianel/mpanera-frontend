import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import HousesServices from "../../services/houses.services";
import { MainContext } from "../../providers/main.provider";
import TabBar from "./TabBar";
import Navbar from "./Navbar";

const HomePage = () => {
  //let snapshot = useSnapshot(states);
  let { houses, setHouses, houseType } = useContext(MainContext);

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
      <div className="flex flex-wrap justify-start gap-x-8 items-baseline">
        {/* {snapshot.houseResults.map((house, index) => {
          return <Card key={new Date() * index} />;
        })} */}
        {/* {houses.map((house, index) => {
          return <Card house={house} key={new Date() * index} />;
        })} */}
        {houses
          .filter((house) => house.house_type === houseType)
          .map((house, index) => {
            return <Card house={house} key={new Date() * index} />;
          })}
      </div>
    </HomeLayout>
  );
};

export default HomePage;
