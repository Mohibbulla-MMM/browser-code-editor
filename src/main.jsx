import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Route/Route.jsx";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <RouterProvider router={Route}>
        <App />
      </RouterProvider>
 
  </React.StrictMode>
);
