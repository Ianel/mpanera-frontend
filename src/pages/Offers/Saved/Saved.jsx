import React, { useEffect } from "react";
import states from "@/states";

const Saved = () => {
  useEffect(() => {
    states.selectedOffersLink = "saved";
  }, []);

  return <h1>nkdnqd</h1>;
};

export default Saved;
