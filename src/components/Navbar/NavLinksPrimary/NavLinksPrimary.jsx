import React from "react";
import { Link } from "react-router-dom";

const NavLinksPrimary = ({ links, className, selectedLink }) => {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.title} className={`mx-4`}>
          <Link to={link.link}>{link.title}</Link>
          {selectedLink === link.title.toLowerCase() && (
            <div className="w-8 h-1 bg-accent"></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinksPrimary;
