import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "@fontsource/inter";

import App from "./app/App";
import "./scss/style.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
