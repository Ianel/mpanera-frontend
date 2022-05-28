import React, { useEffect } from "react";
import states from "@/states";
import OffersLayout from "@/pages/Offers/Publish";

const Publish = () => {
  useEffect(() => {
    states.selectedOffersLink = "publier une offre";
  }, []);

  return <OffersLayout></OffersLayout>;
};

export default Publish;
