import React, { useState } from "react";
import { firebaseApp } from "@/services/firebase.service";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const LoginPage = () => {
  return (
    <div>
      <input type="tel" placeholder="Entrer votre numéro de telephone" />
      <button>S'isncrire</button>
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
