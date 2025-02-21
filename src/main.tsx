import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { ProjectCity } from "./pages/ProjectCity/ProjectCity.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/labs-react">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="project-city" element={<ProjectCity />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
