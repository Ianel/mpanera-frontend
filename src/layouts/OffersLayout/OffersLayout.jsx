import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import states from "@/states";
import NavbarOffers from "@/components/NavbarOffers";

const OffersLayout = ({ children }) => {
  const links = [
    { title: "Publier une offre", trigger: "publish" },
    { title: "Liste des offres publiées", trigger: "list" },
    { title: "Voir offres sauvegardées", trigger: "saved" },
  ];

  useEffect(() => {
    states.selectedLink = "offres";
  }, []);

  return (
    <div>
      <Navbar />
      <NavbarOffers links={links} />
      <main className="bg-secondaryWhite">{children}</main>
    </div>
  );
};

export default OffersLayout;
