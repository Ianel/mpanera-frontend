import OffersLayout from "@/pages/Offers/Saved";
import states from "@/states";
import React, { useEffect } from "react";

const Saved = () => {
  useEffect(() => {
    states.selectedOffersLink = "voir offres sauvegardées";
  }, []);

  return <OffersLayout></OffersLayout>;
};

export default Saved;
