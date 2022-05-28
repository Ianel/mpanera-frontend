import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/Login";
import HomePage from "@/pages/Home";
import RegisterPage from "@/pages/Register";
import OffersPage from "@/pages/Offers";
import Publish from "@/pages/Offers/Publish";
import List from "@/pages/Offers/List";
import Saved from "@/pages/Offers/Saved";

export const App = () => {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/offers" element={<OffersPage />}></Route>
      </Routes>
    </Router>
  );
};
