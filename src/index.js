import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/sidebarContext";
import { ProductsProvider } from "./context/productsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ProductsProvider>
  </React.StrictMode>
);
