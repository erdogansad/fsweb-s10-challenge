import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers/";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer, applyMiddleware(thunk));

root.render(
  <BrowserRouter>
    <ToastContainer />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
