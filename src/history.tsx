import React from "react";
import ReactDOM from "react-dom/client";
import History from "./components/History";
import "./tailwind.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <History />
  </React.StrictMode>,
);
