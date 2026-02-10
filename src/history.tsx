import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import "./index.css";
import HistoryContainer from "./components/History/HistoryContainer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HistoryContainer />
  </React.StrictMode>,
);
