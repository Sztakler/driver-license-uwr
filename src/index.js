import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./output.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import HackTimer from "client/utils/HackTimer.js"; // This import is necessary despite potentially being unused, more details in HackTimer.js

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
