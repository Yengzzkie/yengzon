import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import ProductPage from "./routes/ProductPage";
import ProductDetail from "./routes/ProductDetail";
import Cart from "./routes/Cart";
import Mens from "./routes/Mens";
import Womens from "./routes/Womens";
import Jewelries from "./routes/Jewelries";
import Electronics from "./routes/Electronics";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <Error />, children: [
    {path: "/", element: <Home />},
    {path: "/products", element: <ProductPage />},
    {path: "/products/:prodID", element: <ProductDetail />},
    {path: "/products/mens", element: <Mens />},
    {path: "/products/womens", element: <Womens />},
    {path: "/products/mens", element: <Mens />},
    {path: "/products/jewelries", element: <Jewelries />},
    {path: "/products/electronics", element: <Electronics />},
    {path: "/products/cart", element: <Cart />},
  ] },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
