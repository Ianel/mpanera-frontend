import React from "react";
import PropTypes from "prop-types";
import { avatar } from "assets/images/images";

const sizes = {
  sm: "w-8 h-8",
  md: "w-16 h-16",
  lg: "w-20 h-20",
  xl: "w-24 h-24",
};

const Avatar = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`${sizes[props.size]} ${
        props.className
      } rounded-full border-2 border-gray-500`}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

Avatar.defaultProps = {
  src: avatar,
  alt: "Avatar Image",
  className: "",
  size: "sm",
};

export default Avatar;
