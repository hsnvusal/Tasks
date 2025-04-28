import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/Router";
import { BrowserRouter } from "react-router";
import { Provider } from 'react-redux'
import React from "react";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
