import React from "react";
import { Link } from "react-router-dom";

const NavLinksSecondary = ({ links, className }) => {
  return (
    <div className={className}>
      {links.map(({ title, link }, index) => {
        return title === "Connexion" ? (
          <Link
            to={link}
            key={index}
            className="ml-5 border-2 border-accent text-accent px-4 py-2 rounded-3xl md:rounded-md"
          >
            {title}
          </Link>
        ) : (
          <Link
            to={link}
            key={index}
            className="ml-5 border-2 border-accent bg-accent text-white px-4 py-2 rounded-3xl md:rounded-md"
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinksSecondary;
