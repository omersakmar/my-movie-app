import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import { ListProvider } from "./context/WatchlistProvider";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ListProvider>
        <BrowserRouter>
          <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            useRefreshTokens={true}
            cacheLocation="localstorage"
          >
            <App />
          </Auth0Provider>
        </BrowserRouter>
      </ListProvider>
    </ThemeProvider>
  </React.StrictMode>
);
