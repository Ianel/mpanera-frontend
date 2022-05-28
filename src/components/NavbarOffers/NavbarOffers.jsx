import states from "@/states";
import React from "react";
import { useSnapshot } from "valtio";

const NavbarOffers = ({ links }) => {
  const { dispatch, selectedOffersLink } = useSnapshot(states);

  return (
    <div className="flex justify-evenly items-center border-2">
      {links.map((link, index) => {
        return (
          <button
            key={index}
            className={`p-4 border-2 border-transparent ${
              selectedOffersLink === link.trigger ? "border-b-accent" : ""
            }`}
            onClick={() => dispatch({ type: link.trigger })}
          >
            {link.title}
          </button>
        );
      })}
    </div>
  );
};

export default NavbarOffers;
