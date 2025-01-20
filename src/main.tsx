import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import "./i18next";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App language="en" />} />
        <Route path="/es" element={<App language="es" />} />
        <Route path="/fr" element={<App language="fr" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
