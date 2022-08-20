import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (document.getElementById("app")) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("app")
    );
}