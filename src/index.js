import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele);
root.render(
  <Provider store={store}>
    <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={2500}
      closeOnClick
      pauseOnHover={false}
    />
    <App />
  </Provider>
);
