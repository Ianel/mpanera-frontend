import states from "@/states";
import React from "react";
import { useSnapshot } from "valtio";

const NavbarOffers = ({ links }) => {
  const { dispatch, selectedOffersLink } = useSnapshot(states);

  return (
    <>
      <div className="hidden md:flex flex-col md:flex-row justify-evenly items-center md:border-b-2">
        {links.map((link, index) => {
          return (
            <button
              key={index}
              className={`md:p-4 md:border-b-2 ${
                selectedOffersLink === link.trigger
                  ? "md:border-b-accent"
                  : "md:border-b-transparent"
              }`}
              onClick={() => dispatch({ type: link.trigger })}
            >
              {link.title}
            </button>
          );
        })}
      </div>
      <div className="flex md:hidden justify-evenly items-center">
        {links.map((link, index) => {
          return (
            <button
              key={index}
              className={`flex flex-col items-center ${
                selectedOffersLink === link.trigger ? "text-accent" : ""
              }`}
              onClick={() => dispatch({ type: link.trigger })}
            >
              <p>{link.icon}</p>
              <p>{link.abbr}</p>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default NavbarOffers;
