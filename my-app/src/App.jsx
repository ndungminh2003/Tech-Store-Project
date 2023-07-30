import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CatalogSearch from "./pages/CatalogSearch";
import Purchase from "./pages/Purchase";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    
    <Route index element={<Home />} />
    <Route path="contact" element={<Contact />} />
    <Route path="catalogsearch" element={<CatalogSearch />} />
    <Route path="purchase" element={<Purchase />} />

  </Route>

));

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;