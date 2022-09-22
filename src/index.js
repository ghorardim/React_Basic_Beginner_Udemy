import React from "react";
import ReactDOM from "react-dom/client";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";

//const element = <button class="btn btn-danger">Hello BJIT</button>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
