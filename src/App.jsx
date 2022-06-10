import Cart from "./pages/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import Shop from "./pages/shop";

export default function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:product_id" element={<Product />} />
    </Routes>
  </Router>
  // return <Login />
  // // return <Shop />
  // // return <Home />
  // return <Product />

}