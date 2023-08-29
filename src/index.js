import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./output.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
