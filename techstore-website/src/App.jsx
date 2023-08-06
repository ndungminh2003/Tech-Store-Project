import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CatalogSearch from "./pages/CatalogSearch";
import Purchase from "./pages/Purchase";
import Login from "./pages/Login";
import Register from "./pages/Register";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="search-product" element={<CatalogSearch />} />
      <Route path="purchase" element={<Purchase />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
