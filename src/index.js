import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FunctionalProvider } from "./context/functionalContext";
import { ProductsProvider } from "./context/productsContext";
import { FilterProvider } from "./context/filterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <FunctionalProvider>
          <App />
        </FunctionalProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);
