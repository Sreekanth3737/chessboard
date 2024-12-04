import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ChessBoard from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChessBoard />
  </StrictMode>
);
