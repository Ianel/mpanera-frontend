import React, { useState } from "react";
import { firebaseApp } from "@/services/firebase.service";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { logo } from "@/assets/images/images";
import Input from "@/components/Input";
import { Button } from "@/components/Buttons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LoginPage = () => {
  const [phone, setPhone] = useState("");

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
              <div className="md:w-6 md:h-1 bg-transparent md:m-0 mb-3"></div>
            </div>
            <div>
              <Link to="/login">Connexion</Link>
              <div className="md:w-6 h-1 w-full bg-white"></div>
            </div>
          </div>
        </nav>
        <div className="grid content-center h-4/5 lg:h-full">
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-col">
              <label className="mb-2">Numéro de télephone</label>
              {/*  <Input
                className="mb-10"
                type="tel"
                placeholder="+261 32 00 000 00"
              /> */}
              <PhoneInput
                value={phone}
                inputStyle={{ width: "100%" }}
                placeholder="+261 32 00 450 25"
                className="text-black mb-10"
                country={"mg"}
                specialLabel="Numéro de télephone"
                onChange={(phone) => setPhone(phone)}
              />
              <label className="mb-2">Mot de passe</label>
              <Input
                className="mb-10 h-9 rounded"
                type="tel"
                placeholder="Au moins 8 caractères"
                bordercolor="transparent"
              />
              <Button className="mb-4 h-9 bg-secondary">Se connecter</Button>
            </div>
            <div className="flex lg:flex-row">
              <p>Vous n'avez pas de compte ?</p>
              <Link className="mx-1 font-bold text-secondary" to={"/register"}>
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 hidden bg-gradient-to-r from-blue-300 h-full"></div>
    </div>
  );
};

const Login = () => {
  // Inputs
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: function (response) {
          console.log("reCAPTCHA solved, allow signInWithPhoneNumber.");
        },
        "expired-callback": function () {
          console.log("Response expired. Ask user to solve reCAPTCHA again.");
        },
      },
      getAuth(firebaseApp)
    );

    signInWithPhoneNumber(getAuth(firebaseApp), mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <center>
        <div style={{ display: !show ? "block" : "none" }}>
          <input
            value={mynumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            placeholder="phone number"
          />
          <br />
          <br />
          <div id="recaptcha-container"></div>
          <button onClick={signin}>Send OTP</button>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <input
            type="text"
            placeholder={"Enter your OTP"}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <button onClick={ValidateOtp}>Verify</button>
        </div>
      </center>
    </div>
  );
};

export { Login };

export default LoginPage;
