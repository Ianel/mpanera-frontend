import React from "react";
import PropTypes from "prop-types";

const types = {
  h1: "text-3xl font-bold",
  h2: "text-2xl font-bold",
  h3: "text-xl",
  h4: "text-lg",
  h5: "text-md",
  h6: "text-sm",
};

const Title = (props) => {
  return (
    <p className={`${props.className} ${types[props.type]}`}>
      {props.children}
    </p>
  );
};

Title.defaultProps = {
  type: "h1",
  children: "",
  className: "",
};

Title.propTypes = {
  type: PropTypes.oneOf([...Object.keys(types)]),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Title;
