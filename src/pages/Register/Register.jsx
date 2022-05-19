import React, { useState } from "react";
import { logo } from "@/assets/images/images";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import Input from "@/components/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RegisterPage = () => {
  const [phone, setPhone] = useState("");
  const [phoneInput, setPhoneInput] = useState(true);
  const [passwordInput, setPasswordInput] = useState(false);
  const [passwordInput2, setPasswordInput2] = useState(false);

  return (
    <div className="bg-login bg-cover bg-center h-screen lg:flex lg:flex-row text-white">
      <div className="lg:w-1/2 w-screen bg-gradient-to-r from-primary to-blue-300 h-full px-8 py-4 lg:px-16 lg:flex lg:flex-col">
        <nav className="flex flex-col md:flex-row md:justify-between">
          <div className="flex lg:flex-row items-center">
            <img className="w-12" src={logo} alt="mpanera logo" />
            <h1 className="h1 lg:text-xl">Mpanera</h1>
          </div>
          <div className="md:flex flex-col items-start md:flex-row md:justify-around md:items-center">
            <div className="md:mx-8">
              <Link to="/register">Inscription</Link>
              <div className="md:w-6 h-1 w-full bg-white md:m-0 mb-3"></div>
            </div>
            <div>
              <Link to="/login">Connexion</Link>
              <div className="md:w-6 h-1 w-full bg-transparent"></div>
            </div>
          </div>
        </nav>
        <div className="grid content-center h-4/5 lg:h-full">
          <div className="lg:w-2/3 w-full">
            {phoneInput && (
              <div className="flex flex-col">
                <label className="mb-2">Numéro de télephone</label>
                <PhoneInput
                  value={phone}
                  inputStyle={{ width: "100%" }}
                  placeholder="+261 32 00 450 25"
                  className="text-black mb-10"
                  country={"mg"}
                  specialLabel="Numéro de télephone"
                  onChange={(phone) => setPhone(phone)}
                />
                <Button
                  className="mb-4 h-9 bg-secondary"
                  onClick={() => {
                    setPasswordInput(true);
                    setPhoneInput(false);
                  }}
                >
                  Suivant
                </Button>
              </div>
            )}
            {passwordInput && (
              <div className="flex flex-col">
                <label className="mb-2">Mot de passe</label>
                <Input
                  className="mb-10 h-9 rounded"
                  type="tel"
                  placeholder="Au moins 8 caractères"
                  bordercolor="transparent"
                />
                <Button
                  className="mb-4 h-9 bg-secondary"
                  onClick={() => {
                    setPasswordInput2(true);
                    setPasswordInput(false);
                  }}
                >
                  Suivant
                </Button>
              </div>
            )}
            {passwordInput2 && (
              <div className="flex flex-col">
                <label className="mb-2">Confirmation mot de passe</label>
                <Input
                  className="mb-10 h-9 rounded"
                  type="tel"
                  placeholder="Au moins 8 caractères"
                  bordercolor="transparent"
                />
                <Button className="mb-4 h-9 bg-secondary">Terminer</Button>
              </div>
            )}
            <div className="flex lg:flex-row">
              <p>Vous avez un compte ?</p>
              <Link className="mx-1 font-bold text-secondary" to={"/login"}>
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:block hidden bg-gradient-to-r from-blue-300 h-full"></div>
    </div>
  );
};

export default RegisterPage;
