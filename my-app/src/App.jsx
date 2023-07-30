import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CatalogSearch from "./pages/CatalogSearch";
import Purchase from "./pages/Purchase";
import User from "./pages/User";
import Edit from "./pages/EditProfile";
import UserHome from "./pages/UserHome";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    
    <Route index element={<Home />} />
    <Route path="contact" element={<Contact />} />
    <Route path="search-product" element={<CatalogSearch />} />

    <Route path="/user" element={<User />}>
      <Route index element={<UserHome />} />
      <Route path="order" element={<Purchase />} />
      <Route path="edit" element={<Edit />} />
    </Route>
    

  </Route>

));

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
