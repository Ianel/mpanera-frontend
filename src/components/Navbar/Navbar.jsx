import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import states from "@/states";
import NavBrand from "./NavBrand";
import NavLinksPrimary from "./NavLinksPrimary";
import NavLinksSecondary from "./NavLinksSecondary";
import NavSearchBar from "./NavSearchBar";

const links = [
  { title: "Accueil", link: "/" },
  { title: "Offres", link: "/offers" },
  { title: "A propos", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const moreLinks = [
  { title: "Connexion", link: "/login" },
  { title: "Inscription", link: "/register" },
];

const Navbar = () => {
  const { selectedLink } = useSnapshot(states);
  return (
    <nav className="py-4 flex px-8 items-center justify-between">
      <NavBrand className="flex flex-row items-center" />
      <NavLinksPrimary
        selectedLink={selectedLink}
        className="flex mx-8"
        links={links}
      />
      <NavSearchBar />
      <NavLinksSecondary
        className="flex flex-row items-center justify-between"
        links={moreLinks}
      />
    </nav>
  );
};

export default Navbar;
