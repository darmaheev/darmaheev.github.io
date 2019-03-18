import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Contur from "./constants/contur";
import * as serviceWorker from "./serviceWorker";

Contur.init()
  .then((config) => {
    Contur.set(config);

    ReactDOM.render(
      <App />,
      document.getElementById("root")
    );
  });

serviceWorker.unregister();
