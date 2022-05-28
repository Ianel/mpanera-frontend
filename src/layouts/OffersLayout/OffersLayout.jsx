import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import states from "@/states";
import NavbarOffers from "@/components/NavbarOffers";
import { FaBookmark, FaList, FaPen } from "react-icons/fa";

const OffersLayout = ({ children }) => {
  const links = [
    {
      title: "Publier une offre",
      abbr: "Publier",
      trigger: "publish",
      icon: <FaPen />,
    },
    {
      title: "Liste des offres publiées",
      abbr: "Consulter",
      trigger: "list",
      icon: <FaList />,
    },
    {
      title: "Voir offres sauvegardées",
      abbr: "Sauvegarder",
      trigger: "saved",
      icon: <FaBookmark />,
    },
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
