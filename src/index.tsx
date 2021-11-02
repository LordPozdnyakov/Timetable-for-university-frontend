import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

import "./index.css";
import "antd/dist/antd.css";
import "./Shared/common.scss";
import setupStore from "./Redux/Store";

const store = setupStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
