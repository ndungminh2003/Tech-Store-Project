import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { LiaUserTieSolid } from "react-icons/lia";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { TbReportMoney } from "react-icons/tb";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin-login");
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */ className="admin">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">TS</span>
            <span className="lg-logo">Tech Store</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "logout") {
              handleLogout();
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
              children: [
                {
                  key: "customer",
                  icon: <AiOutlineUser className="fs-4" />,
                  label: "Add Customer",
                },
                {
                  key: "list-customer",
                  icon: <AiOutlineUser className="fs-4" />,
                  label: "Customer List",
                },
              ],
            },
            {
              key: "salesperson",
              icon: <LiaUserTieSolid className="fs-4" />,
              label: "Saleperson",
              children: [
                {
                  key: "salesperson",
                  icon: <LiaUserTieSolid className="fs-4" />,
                  label: "Add Saleperson",
                },
                {
                  key: "list-salesperson",
                  icon: <LiaUserTieSolid className="fs-4" />,
                  label: "Saleperson List",
                },
              ],
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand List ",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "Orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
              children: [
                {
                  key: "order",
                  icon: <FaClipboardList className="fs-4" />,
                  label: "Add Order",
                },
                {
                  key: "list-order",
                  icon: <FaClipboardList className="fs-4" />,
                  label: "Order List",
                },
              ],
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "sales-report",
              icon: <TbReportMoney className="fs-4" />,
              label: "Sales Reports",
            },
            // {
            //   key: "blogs",
            //   icon: <FaBloggerB className="fs-4" />,
            //   label: "Blogs",
            //   children: [
            //     {
            //       key: "blog",
            //       icon: <ImBlog className="fs-4" />,
            //       label: "Add Blog",
            //     },
            //     {
            //       key: "blog-list",
            //       icon: <FaBloggerB className="fs-4" />,
            //       label: "Blog List",
            //     },
            //     {
            //       key: "blog-category",
            //       icon: <ImBlog className="fs-4" />,
            //       label: "Add Blog Category",
            //     },
            //     {
            //       key: "blog-category-list",
            //       icon: <FaBloggerB className="fs-4" />,
            //       label: "Blog Category List",
            //     },
            //   ],
            // },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
            {
              key: "logout",
              icon: <RiLogoutBoxRLine className="fs-4" />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-secondary rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Hoang Anh</h5>
                <p className="mb-0">Administrator</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                  >
                    Logout
                  </button>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
