import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./style/index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
