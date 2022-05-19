import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const setColor = () => {
    switch (props.color) {
      case "primary":
        return "bg-blue-500";
      case "secondary":
        return "bg-secondary";
      case "accent":
        return "bg-accent";
      default:
        return "bg-blue-600";
    }
  };

  return (
    <button
      className={`${
        props.wide && "w-full"
      } p-2 ${setColor()} text-white rounded-md ${props.className}`}
      onClick={props.onClick}
      size={props.size}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary", "accent"]),
  className: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  children: "",
  size: "md",
  onClick: null,
  color: "primary",
  className: "",
  wide: false,
};

export default Button;