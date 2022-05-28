import React, { useEffect } from "react";
import states from "@/states";

const Publish = () => {
  useEffect(() => {
    states.selectedOffersLink = "publish";
  }, []);

  return <h1>Pussbjkc</h1>;
};

export default Publish;
