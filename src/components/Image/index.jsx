import React from 'react';
import PropTypes from 'prop-types';
import { mac } from '../../assets/images/images';

const Image = (props) => {
  return (
    <img src={props.src} alt={props.alt} className={`${props.className} object-cover`} />
  )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
};

Image.defaultProps = {
    src: mac,
    alt: "Image",
    className: ""
};

export default Image;