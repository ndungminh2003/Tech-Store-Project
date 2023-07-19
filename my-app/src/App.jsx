import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    
    <Route index element={<Home />} />
    <Route path="contact" element={<Contact />} />

  </Route>

));

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
