import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductView from "./pages/Productview";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    
    <Route index element={<Home />} />
    <Route path="contact" element={<Contact />} />
    <Route path="ProductView" element={<ProductView />} />
    <Route path="Favorites" element={<Favorites />} />
    <Route path="Cart" element={<Cart />} />
    <Route path="Order" element={<Order />} />

  </Route>

));

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
