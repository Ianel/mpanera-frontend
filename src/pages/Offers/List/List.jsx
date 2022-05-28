import OffersLayout from "@/pages/Offers/List";
import states from "@/states";
import React, { useEffect } from "react";

const List = () => {
  useEffect(() => {
    states.selectedOffersLink = "liste des offres publiées";
  }, []);

  return <OffersLayout></OffersLayout>;
};

export default List;
