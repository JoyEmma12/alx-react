import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import creatStore from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "./reducers/uiReducer";
import Map from "immutable";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const store = creatStore(uiReducer, Map(initialState));
