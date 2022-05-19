import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import states from "@/states";
import Button from "@/components/Button";
import { logoBlue, mac } from "@/assets/images/images";
import Input from "@/components/Input/Input";
import Avatar from "@/components/Avatar/Avatar";
import { MdNotifications, MdSearch } from "react-icons/md";

const links = [
  { title: "Accueil", link: "/" },
  { title: "Panier", link: "/cart" },
  { title: "Favoris", link: "/favorite" },
  { title: "Compte", link: "/account" },
];

const Navbar = (props) => {
  const { selectedLink } = useSnapshot(states);
  return (
    <nav className="py-4 flex px-8 items-center justify-between">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <img className="w-12 h-12" src={logoBlue} alt="logo" />
          <Link to="/">
            <h1 className="h1 text-blue-500 text-xl">Mpanera</h1>
          </Link>
        </div>
        <ul className="flex mx-8">
          {links.map((link) => (
            <li key={link.title} className={`mx-4`}>
              <Link to={link.link}>{link.title}</Link>
              {selectedLink === link.title.toLowerCase() && (
                <div className="w-8 h-1 bg-blue-500"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center border-zinc-500 border-2 px-4 rounded-md">
          <MdSearch />
          <Input
            className="h-9 border-transparent focus:outline-none"
            type="search"
            placeholder="Recherche"
          />
        </div>
        <MdNotifications className="ml-8" size={"24"} />
        <Avatar src={mac} className="mx-8 border-none object-cover" size="sm" />
        <Button className="px-4">Publier</Button>
      </div>
    </nav>
  );
};

export default Navbar;
