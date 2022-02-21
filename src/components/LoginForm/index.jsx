import React from 'react';
import PropTypes from 'prop-types';
import { logo } from '../../assets/images/images';
import Image from '../Image';
import Input from '../Input';
import { Button } from '../Buttons';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <form className={`${props.className} w-1/4 p-8 m-10 shadow-md`}>
        <Image src={props.logo_image} alt={props.alt_image} className="w-12 h-12 mx-auto my-4" />
        <div className='mb-4'>
            <label>{props.label_text}: </label><br />
            <Input type='text' className="px-3 py-1 mt-3" placeholder='Entrer votre adresse électronique' />
        </div>
        <div className='mb-4'>
            <label>{props.label_password}: </label><br />
            <Input type='password' className="px-3 py-1 mt-3" placeholder='Entrer votre mot de passe' />
        </div>
        <Button wide color={props.button_color}>Se connecter</Button>
        <p className='mt-6 mb-4 text-center'>Vous n'avez pas de compte ?<Link className='text-blue-500 underline' to="/about"> Inscrivez-vous</Link></p>
    </form>
  )
}

LoginForm.propTypes = {
  className: PropTypes.string,
  logo_image: PropTypes.string,
  alt_image: PropTypes.string,
  label_text: PropTypes.string,
  label_password: PropTypes.string,
  button_color: PropTypes.string
};

LoginForm.defaultProps = {
  className: "",
  logo_image: logo,
  alt_image: "Logo Image",
  label_text: "Email",
  label_password: "Mot de passe",
  button_color: "primary"
};

export default LoginForm;