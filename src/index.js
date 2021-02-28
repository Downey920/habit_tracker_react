import ReactDom from "react-dom";
import React from "react";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
