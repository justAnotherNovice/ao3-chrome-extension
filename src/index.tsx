import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

function render() {
  if (process.env.NODE_ENV === "development") {
    return require("./AppDev").default;
  }
  return require("./App").default;
}

const App = render();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
