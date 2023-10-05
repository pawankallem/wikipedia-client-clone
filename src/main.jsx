import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Local: 'http://localhost:5000
// Prod: 'hhttps://wiki-server-clone.onrender.com
// axios.defaults.baseURL = "https://wiki-server-clone.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
