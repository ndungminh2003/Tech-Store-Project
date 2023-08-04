import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CatalogSearch from "./pages/CatalogSearch";
import Purchase from "./pages/Purchase";
import User from "./pages/User";
import Edit from "./pages/EditProfile";
import UserHome from "./pages/UserHome";
import ProductView from "./pages/ProductView";
import Login from './pages/Login';
import Register from "./pages/Register";
import Cart from './pages/Cart';
import PaymentInfo from "./pages/PaymentInfo";
import Payment from "./pages/Payment";
import Voucher from "./pages/Voucher";
import PaymentSuccess from './pages/PaymentSuccess';
import BankTransferInfo from './pages/BankTransferInfo';
import RestorePassword from "./pages/RestorePassword";
import Otp from './pages/Otp';
import CreateNewPassword from './pages/CreateNewPassword';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    
    <Route index element={<Home />} />
    <Route path="contact" element={<Contact />} />
    <Route path="ProductView" element={<ProductView />} />
    <Route path="search-product" element={<CatalogSearch />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="RestorePassword" element={<RestorePassword />} />
    <Route path="Otp" element={<Otp />} />
    <Route path="CreateNewPassword" element={<CreateNewPassword />} />

    <Route path="Cart" element={<Cart />} />
    <Route path="cart/payment-info" element={<PaymentInfo />} />
    <Route path="cart/voucher" element={<Voucher />} />
    <Route path="cart/payment" element={<Payment />} />
    <Route path="cart/payment/success" element={<PaymentSuccess />} />
    <Route path="cart/bank-transfer-info" element={<BankTransferInfo />} />

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
