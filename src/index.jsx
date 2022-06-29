import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import MainProvider from "./providers/main.provider";

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
