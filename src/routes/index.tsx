import Layout from "@/components/Layout";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<Cart />} />
    </Route>,
  ),
);

export default routes;
