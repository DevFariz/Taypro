import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/fonts/Golos-UI_Bold.ttf";
import "./assets/fonts/Golos-UI_Medium.ttf";
import "./assets/fonts/Golos-UI_Regular.ttf";

import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <App />
    </Router>
);
