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

const LoginPage = () => {
  return (
    <div className="bg-login bg-cover h-screen lg:flex lg:flex-row text-white">
      <div className="lg:w-1/2 bg-gradient-to-r from-blue-900 h-full py-4 px-16 lg:flex lg:flex-col">
        <nav className="lg:flex lg:flex-row lg:justify-between">
          <div className="lg:flex lg:flex-row lg:items-center">
            <img className="w-12" src={logo} alt="mpanera logo" />
            <h1 className="h1 lg:text-xl">Mpanera</h1>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-around lg:items-center">
            <div className="mx-8">
              <Link to="/register">Inscription</Link>
              <div className="lg:w-6 lg:h-1 bg-transparent"></div>
            </div>
            <div>
              <Link to="/login">Connexion</Link>
              <div className="lg:w-6 lg:h-1 bg-white"></div>
            </div>
          </div>
        </nav>
        <div className="grid content-center h-full">
          <div className="w-2/3">
            <div className="flex flex-col">
              <label className="mb-2">Numéro de télephone</label>
              <Input
                className="mb-10"
                type="tel"
                placeholder="+261 32 00 000 00"
              />
              <Button className="mb-4">Se connecter</Button>
            </div>
            <div className="flex lg:flex-row">
              <p>Vous n'avez pas de compte ?</p>
              <Link className="mx-1 font-bold text-blue-500" to={"/register"}>
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 h-full opacity-50"></div>
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
