import states from "@/states";
import React from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";

const NavbarOffers = ({ links }) => {
  const { selectedOffersLink } = useSnapshot(states);

  return (
    <div className="flex justify-evenly items-center border-2">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.link}
            className={`border-b-2 p-4 ${
              selectedOffersLink === link.title.toLowerCase()
                ? "border-accent"
                : "border-transparent"
            } `}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarOffers;
