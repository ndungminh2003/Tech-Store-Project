import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React from "react";

// client
import LayoutUser from "./components/layout/LayoutUser";
import Home from "./views/client/Home";
import Contact from "./views/client/Contact";
import ProductDetail from "./views/client/ProductDetail";
import ResultCatalog from "./views/client/ResultCatalog";
import Cart from "./views/client/Cart";
import PaymentInfo from "./views/client/PaymentInfor";
import Voucher from "./views/client/Voucher";
import Payment from "./views/client/Payment";
import PaymentSuccess from "./views/client/PaymentSuccess";
import PaymentFailed from "./views/client/PaymentFailed";
import WishList from "./views/client/WishList";
import ForgotPassword from "./views/client/ForgotPassword";
import ForgotPasswordOtp from "./views/client/ForgotPasswordOtp";
import RegisteredOTP from "./views/client/RegisteredOTP";
import ResultSearch from "./views/client/ResultSearch";
import ChangePassword from "./views/client/ChangePassword";
import OrderHistory from "./views/client/OrderHistory";
import Login from "./views/client/Login";
import Register from "./views/client/Register";
import UserHomeNavbar from "./views/client/UserHomeNavbar";
import EditProfile from "./views/client/EditProfile";
import UserHome from "./views/client/UserHome";
import PageNotFound from "./views/client/PageNotFound";
import OrderDetail from "./views/client/OrderDetail";

// admin
import AddCustomer from "./views/admin/AddCustomer";
import AddSalesperson from "./views/admin/AddSalesperson";
import SalespersonList from "./views/admin/SalespersonList";
import Dashboard from "./views/admin/Dashboard";
import CustomerList from "./views/admin/CustomerList";
import AddProduct from "./views/admin/AddProduct";
import ProductList from "./views/admin/ProductList";
import AddCategory from "./views/admin/AddCategory";
import CategoryList from "./views/admin/CategoryList";
import AddBrand from "./views/admin/AddBrand";
import BrandList from "./views/admin/BrandList";
import AddColor from "./views/admin/AddColor";
import ColorList from "./views/admin/ColorList";
import AddCoupon from "./views/admin/AddCoupon";
import CouponList from "./views/admin/CouponList";
import Orders from "./views/admin/Orders";
import AdminForgotPassword from "./views/admin/ForgotPassword";
import ResetPassword from "./views/admin/ResetPassword";
import AdminLogin from "./views/admin/Login";
import AdminLayout from "./components/layout/LayoutAdmin";
import CustomerDetails from "./views/admin/CustomerDetails";
import EditOrder from "./views/admin/EditOrder";
import ReportList from "./views/admin/SalesReportList";
// salesperson
import SPLayout from "./components/layout/LayoutSP";
import SPDashboard from "./views/salesperson/Dashboard";
import SPAddCustomer from "./views/salesperson/AddCustomer";
import SPCustomerList from "./views/salesperson/CustomerList";
import SPAddProduct from "./views/salesperson/AddProduct";
import SPProductList from "./views/salesperson/ProductList";
import SPOrders from "./views/salesperson/Orders";
import SPLogin from "./views/salesperson/Login";
import SPAddReport from "./views/salesperson/AddSalesReport";
import SPReportList from "./views/salesperson/SalesReportList";
import ChatSupport from "./views/salesperson/ChatEngine";
import SPResetPassword from "./views/salesperson/ResetPassword";
import SPForgotPassword from "./views/salesperson/ForgotPassword";
// protected route
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RequireAuth allowedRoles="" />}>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Home />} />
          <Route path="product-view/:slug" element={<ProductDetail />} />
          <Route path="search-product" element={<ResultSearch />} />
          <Route path="contact" element={<Contact />} />
          <Route element={<RequireAuth allowedRoles="user" />}>
            <Route path="wishlist" element={<WishList />} />
            <Route path="/user" element={<UserHomeNavbar />}>
              <Route index element={<UserHome />} />
              <Route path="order" element={<OrderHistory />} />
              <Route path="order/:id" element={<OrderDetail />} />
              <Route path="edit" element={<EditProfile />} />
            </Route>
          </Route>
          <Route path="catalog" element={<ResultCatalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/payment-info" element={<PaymentInfo />} />
          <Route path="/cart/payment" element={<Payment />} />
          <Route path="/cart/payment/success" element={<PaymentSuccess />} />
          <Route path="/cart/payment/failed" element={<PaymentFailed />} />
          <Route path="/cart/voucher" element={<Voucher />} />
          <Route path="forgot-password-otp" element={<ForgotPasswordOtp />} />
          <Route path="otp" element={<RegisteredOTP />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>

      {/*Page not found*/}
      <Route path="*" Component={PageNotFound} />

      <Route path="login" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
      <Route path="/admin/reset-password" element={<ResetPassword />} />
      <Route path="/salesperson-login" element={<SPLogin />} />
      <Route
        path="/salesperson/forgot-password"
        element={<SPForgotPassword />}
      />
      <Route path="/salesperson/reset-password" element={<SPResetPassword />} />
      <Route element={<RequireAuth allowedRoles="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customer" element={<AddCustomer />} />
          <Route path="customer/:id" element={<AddCustomer />} />
          <Route path="customer-list" element={<CustomerList />} />
          {/* <Route path="customer" element={<CustomerDetails />} /> */}
          <Route path="salesperson" element={<AddSalesperson />} />
          <Route path="salesperson/:id" element={<AddSalesperson />} />
          <Route path="list-salesperson" element={<SalespersonList />} />
          <Route path="product" element={<AddProduct />} />
          <Route path="product/:id" element={<AddProduct />} />
          <Route path="list-product" element={<ProductList />} />
          <Route path="category" element={<AddCategory />} />
          <Route path="category/:id" element={<AddCategory />} />
          <Route path="list-category" element={<CategoryList />} />
          <Route path="brand" element={<AddBrand />} />
          <Route path="brand/:id" element={<AddBrand />} />
          <Route path="list-brand" element={<BrandList />} />
          <Route path="color" element={<AddColor />} />
          <Route path="color/:id" element={<AddColor />} />
          <Route path="list-color" element={<ColorList />} />
          <Route path="coupon-list" element={<CouponList />} />
          <Route path="coupon" element={<AddCoupon />} />
          <Route path="coupon/:id" element={<AddCoupon />} />
          <Route path="order-list" element={<Orders />} />
          <Route path="order/edit-order/:id" element={<EditOrder />} />
          <Route path="order/:id" element={<EditOrder />} />
          <Route path="report-list/" element={<ReportList />} />
        </Route>
      </Route>
      <Route element={<RequireAuth allowedRoles="salesperson" />}>
        <Route path="/salesperson" element={<SPLayout />}>
          <Route index element={<SPDashboard />} />
          <Route path="customer" element={<SPAddCustomer />} />
          <Route path="customer/:id" element={<SPAddCustomer />} />
          <Route path="customer-list" element={<SPCustomerList />} />
          {/* <Route path="customer" element={<CustomerDetails />} /> */}
          <Route path="product" element={<SPAddProduct />} />
          <Route path="product/:id" element={<SPAddProduct />} />
          <Route path="list-product" element={<SPProductList />} />
          <Route path="order/edit-order/:id" element={<EditOrder />} />
          <Route path="order-list" element={<SPOrders />} />
          <Route path="order/:id" element={<EditOrder />} />
          <Route path="report-list/" element={<SPReportList />} />
          <Route path="report/" element={<SPAddReport />} />
          <Route path="report/:id" element={<SPAddReport />} />
          <Route path="support" element={<ChatSupport />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
