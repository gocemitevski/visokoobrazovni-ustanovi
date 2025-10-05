import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/style.scss";
import App from "./App.jsx";
import ReactGA from "react-ga4";
import { Cookies } from "react-cookie-consent";

if (Cookies.get(import.meta.env.VITE_APP_GA_ID) === "true") {
  import.meta.env.VITE_APP_GA &&
    ReactGA.initialize(import.meta.env.VITE_APP_GA, {
      debug: false,
      gaOptions: { cookieDomain: "gocemitevski.github.io" },
    });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
