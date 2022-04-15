import React, { useState } from "react";
import { logo } from "@/assets/images/images";
import { Button } from "@/components/Buttons";
import { Link } from "react-router-dom";
import Input from "@/components/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RegisterPage = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-login bg-cover bg-center h-screen lg:flex lg:flex-row text-white">
      <div className="lg:w-1/2 bg-gradient-to-r from-primary to-blue-300 h-full py-4 px-16 lg:flex lg:flex-col">
        <nav className="lg:flex lg:flex-row lg:justify-between">
          <div className="lg:flex lg:flex-row lg:items-center">
            <img className="w-12" src={logo} alt="mpanera logo" />
            <h1 className="h1 lg:text-xl">Mpanera</h1>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-around lg:items-center">
            <div className="mx-8">
              <Link to="/register">Inscription</Link>
              <div className="lg:w-6 lg:h-1 bg-white"></div>
            </div>
            <div>
              <Link to="/login">Connexion</Link>
              <div className="lg:w-6 lg:h-1 bg-transparent"></div>
            </div>
          </div>
        </nav>
        <div className="grid content-center h-full">
          <div className="w-2/3">
            <div className="flex flex-col">
              <label className="mb-2">Numéro de télephone</label>
              <PhoneInput
                value={phone}
                inputStyle={{ width: "100%" }}
                placeholder="+261 32 00 450 25"
                className="text-black mb-8"
                country={"mg"}
                specialLabel="Numéro de télephone"
                onChange={(phone) => setPhone(phone)}
              />
              <Button className="mb-4 h-9 bg-secondary">S'inscrire</Button>
            </div>
            <div className="flex lg:flex-row">
              <p>Vous avez déjà un compte ?</p>
              <Link className="mx-1 font-bold text-secondary" to={"/login"}>
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 bg-gradient-to-r from-blue-300 h-full"></div>
    </div>
  );
};

export default RegisterPage;
