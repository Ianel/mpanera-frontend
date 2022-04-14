import React from "react";
import { auth, firebaseApp } from "@/services/firebase.service";
import { getAuth, signOut } from "firebase/auth";

const Mainpage = () => {
  const logout = () => {
    //auth.signOut();
    signOut(getAuth(firebaseApp));
  };

  return (
    <div style={{ marginTop: 250 }}>
      <center>
        <h3>Welcome{auth.currentUser.phoneNumber}</h3>
        <button style={{ marginLeft: "20px" }} onClick={logout}>
          Logout
        </button>
      </center>
    </div>
  );
};

export default Mainpage;
