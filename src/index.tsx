import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

function render() {
  if (process.env.NODE_ENV === "development") {
    return function () {
      return <h1 className="text-blue">Hello world</h1>;
    };
  }
  return require("./App").default;
}

const App = render();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
