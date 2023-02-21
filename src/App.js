import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "./components";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductPage,
  SingleProductPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:prodId" element={<SingleProductPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
