import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FunctionalProvider } from "./context/functionalContext";
import { ProductsProvider } from "./context/productsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FunctionalProvider>
        <App />
      </FunctionalProvider>
    </ProductsProvider>
  </React.StrictMode>
);
