import React from "react";
import PropTypes from "prop-types";
import states from "../../states";

const Input = ({ wide, isRequired, ...props }) => {
  return (
    <input
      {...props}
      required={isRequired}
      onChange={(e) => {
        states.input[props.name] = e.target.value;
      }}
      className={`border-2 focus:border-blue-500 rounded-md px-2 py-2 ${
        props.className
      } ${props.bordercolor} ${wide && "w-full"}`}
    />
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  bordercolor: "border-gray-500",
  name: "",
  wide: true,
  isRequired: true,
};

// Proptypes
Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  bordercolor: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  wide: PropTypes.bool,
  isRequired: PropTypes.bool,
};

export default Input;

export const TextArea = ({ wide, ...props }) => {
  return (
    <textarea
      {...props}
      onChange={(e) => {
        states.input[props.name] = e.target.value;
      }}
      className={`border-2 rounded-md focus:border-blue-500 px-2 py-2 ${
        props.className
      } ${props.bordercolor} ${wide && "w-full"}`}
    ></textarea>
  );
};

TextArea.defaultProps = {
  placeholder: "",
  bordercolor: "border-gray-500",
  name: "",
  wide: true,
  className: "",
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  bordercolor: PropTypes.string,
  name: PropTypes.string,
  wide: PropTypes.bool,
  className: PropTypes.string,
};

/* export const Select = ({ props }) => {
  return (
    <select
      {...props}
      onChange={(e) => {
        states.input[props.name] = e.target.value;
      }}
      className={`border-2 rounded-md focus:border-blue-500 px-2 py-2 ${
        props.className
      } ${props.bordercolor} ${props.wide && "w-full"}`}
    >
      {props.items.map(({ value, choice }) => {
        return <option value={value}>{choice}</option>;
      })}
    </select>
  );
};

Select.defaultProps = {
  bordercolor: "border-gray-500",
  name: "",
  wide: true,
  className: "",
};

Select.propTypes = {
  bordercolor: PropTypes.string,
  name: PropTypes.string,
  wide: PropTypes.bool,
  className: PropTypes.string,
}; */
