import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logoBlue } from "../../assets/images/images";
import AuthService from "../../services/auth.service";

const RegisterPage = () => {
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [inputPassword, setInputPassword] = useState(true);
  let navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="p-10 md:ring-1 md:ring-slate-200 md:shadow-lg w-96 md:rounded-xl">
        <img className="w-12 block mx-auto" src={logoBlue} alt="" />
        <h1 className="text-center text-blue-500 text-2xl pb-5 pt-3">
          Inscription
        </h1>
        <form className="flex flex-col">
          <label className="my-4">
            Telephone
            <br />
            <input
              className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ring-1 ring-blue-500 outline-none rounded-md"
              type="tel"
              placeholder="261328054689"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label className="my-4 relative">
            Mot de passe
            <br />
            <input
              className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ring-1 ring-blue-500 outline-none rounded-md"
              type={inputPassword ? "password" : "text"}
              placeholder="Au moins 8 caractères"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEye
              className="absolute right-2 cursor-pointer top-[55%]"
              onClick={() =>
                setInputPassword((inputPassword) => !inputPassword)
              }
            />
          </label>
          <button
            className="bg-blue-500 rounded-md py-2 my-4 text-white"
            onClick={async (e) => {
              e.preventDefault();
              await AuthService.register({
                tel: phone_number,
                password: password,
              });
              navigate("/profile");
            }}
          >
            Inscription
          </button>
        </form>
        <p className="mt-3 text-center">
          Vous avez déjà un compte ?{" "}
          <Link to="/login" className="ml-3 text-blue-500 font-bold">
            Se connecter
          </Link>
        </p>
        <p className=" underline text-center mt-4">
          <Link to="/" className="text-blue-500">
            Je veux juste consulter des offres
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
