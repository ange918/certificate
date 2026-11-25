import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { assertCatalog } from "./data/audit";
import "./index.css";

assertCatalog();

const root = document.getElementById("root");
if (!root) throw new Error("Racine introuvable");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
