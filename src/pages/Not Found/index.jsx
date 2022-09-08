import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { notFound } from "../../assets/images/images";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-primaryWhite grid grid-cols-2">
      <img
        src={notFound}
        className="h-screen object-cover"
        alt="Not Found image"
      />
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-3xl text-blue-500 font-bold mb-4">
            Page Not Found
          </h1>
          <p>
            Please, go back to{" "}
            <Link to={ROUTES.HOME} className="underline text-blue-500">
              homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
