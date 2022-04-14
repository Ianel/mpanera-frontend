/* import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import { HomePage } from "./pages/Home";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </Router>
  );
}; */

import React from "react";
import { auth } from "@/services/firebase.service.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Login } from "@/pages/Login";
import Mainpage from "@/pages/Home/Main";

function App() {
  const [user] = useAuthState(auth);
  return user ? <Mainpage /> : <Login />;
}

export { App };
