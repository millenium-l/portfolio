// main root component
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// browser router enables routing and navigate between different views or pages without reloading the whole page.
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
