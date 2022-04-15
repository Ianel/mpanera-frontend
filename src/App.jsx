import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "@/services/firebase.service.js";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "@/pages/Login";
import Mainpage from "@/pages/Home/Main";
import AboutPage from "@/pages/About";
import { HomePage } from "@/pages/Home";

export const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/about"
          element={user ? <Mainpage /> : <LoginPage />}
        ></Route>
      </Routes>
    </Router>
  );
};
