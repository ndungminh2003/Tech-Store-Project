import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductView from "./pages/Productview";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import PaymentInfo from "./pages/PaymentInfor";
import Voucher from "./pages/Voucher";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BankTransferInfo from "./pages/BankTransferInfo";
import RestorePassword from "./pages/RestorePassword";
import Otp from "./pages/Otp";
import CreateNewPassword from "./pages/CreateNewPassword";
import CatalogSearch from "./pages/CatalogSearch";
import Purchase from "./pages/Purchase";
import User from "./pages/User";
import Edit from "./pages/EditProfile";
import UserHome from "./pages/UserHome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="search-product" element={<CatalogSearch />} />
      <Route path="ProductView" element={<ProductView />} />
      <Route path="Favorites" element={<Favorites />} />
      <Route path="shopping-cart" element={<Cart />} />
      <Route path="cart/payment-info" element={<PaymentInfo />} />
      <Route path="cart/voucher" element={<Voucher />} />
      <Route path="cart/payment" element={<Payment />} />
      <Route path="cart/payment/success" element={<PaymentSuccess />} />
      <Route path="cart/bank-transfer-info" element={<BankTransferInfo />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="Order" element={<Order />} />
      <Route path="RestorePassword" element={<RestorePassword />} />
      <Route path="Otp" element={<Otp />} />
      <Route path="CreateNewPassword" element={<CreateNewPassword />} />

      <Route path="/user" element={<User />}>
        <Route index element={<UserHome />} />
        <Route path="order" element={<Purchase />} />
        <Route path="edit" element={<Edit />} />
      </Route>

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
