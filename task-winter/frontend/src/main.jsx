import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/router";
import { BrowserRouter } from "react-router";
import {Provider} from "react-redux"
import "./index.css";
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
