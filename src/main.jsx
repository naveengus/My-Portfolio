import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import store from "./redux/Store.js";
// import { provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <provider store={store}> */}
    <App />
    {/* </provider> */}
  </React.StrictMode>
);
