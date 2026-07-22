import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./infrastructure/theme/index.js";
import { Global_Context_Provider } from "./infrastructure/services/global/global.context.jsx";
import { Geolocation_Context_Provider } from "./infrastructure/services/geolocation/geolocation.context.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global_Context_Provider>
        <Geolocation_Context_Provider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Geolocation_Context_Provider>
      </Global_Context_Provider>
    </ThemeProvider>
  </StrictMode>
);
