import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./states/index";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faCaretDown,
  faCaretUp,
  faXmark,
  faEye,
  faEyeSlash,
  faLock,
  faCircleExclamation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
//styles
import "./styles/index.styles.scss";

library.add(
  faUser,
  faCaretDown,
  faCaretUp,
  faXmark,
  faEye,
  faEyeSlash,
  faLock,
  faCircleExclamation, 
  faEnvelope
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
