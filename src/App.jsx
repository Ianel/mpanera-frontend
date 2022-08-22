import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import AccountPage from "./pages/Account";
import HomePage from "./pages/Home";
import HouseDetail from "./pages/HouseDetail";
import LoginPage from "./pages/Login";
import OffersPage from "./pages/Offers";
import AddOffers from "./pages/Offers/AddOffers";
import UpdateOffers from "./pages/Offers/UpdateOffers";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";
import AuthService from "./services/auth.service";

const App = () => {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />}></Route>
          <Route path={ROUTES.HOUSE_DETAIL} element={<HouseDetail />}></Route>
          <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
          <Route path={ROUTES.REGISTER} element={<RegisterPage />}></Route>
          <Route
            path={ROUTES.OFFERS}
            element={
              AuthService.getUserToken() ? <OffersPage /> : <LoginPage />
            }
          ></Route>
          <Route path={ROUTES.ADD_OFFERS} element={<AddOffers />}></Route>
          <Route path={ROUTES.PROFILE} element={<ProfilePage />}></Route>
          <Route path={ROUTES.ACCOUNT} element={<AccountPage />}></Route>
          <Route path={ROUTES.UPDATE_OFFER} element={<UpdateOffers />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
