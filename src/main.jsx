import React from "react";
import ReactDOM from "react-dom/client"; // ← React 18 uchun
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
