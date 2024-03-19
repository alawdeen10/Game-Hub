import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeContextProvider from "./Contexts/HomeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeContextProvider>
      <App />
    </HomeContextProvider>
  </React.StrictMode>
);
reportWebVitals();
