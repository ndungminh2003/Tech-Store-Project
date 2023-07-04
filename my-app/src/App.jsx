import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Root from "./Root";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />

    <Route path="/users">
      <Route index element={<List />} />
      <Route path=":userId" element={<Single />} />
      <Route path="new" element={<New />} />
    </Route>

    <Route path="/products">
      <Route index element={<List />} />
      <Route path=":productId" element={<Single />} />
      <Route path="new" element={<New />} />
    </Route>
    
    <Route path="/login" element={<Login />} />

  </Route>
));

export default function App() {
  return (

    <RouterProvider router={router}/>
    
  );
}





