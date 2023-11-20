import { lazy } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AddCardIcon from "@mui/icons-material/AddCard";
import GroupIcon from "@mui/icons-material/Group";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
const Dashboard = lazy(() =>
  import("../../features/admin/dashboard/Dashboard")
);
const Payment = lazy(() => import("../../features/admin/payment/Payment"));
const Order = lazy(() => import("../../features/admin/orders/Order"));
const Shipping = lazy(() => import("../../features/admin/shipping/Shipping"));
const Customers = lazy(() =>
  import("../../features/admin/Custumers/Customers")
);

const Cartform = lazy(() => import("../../features/admin/CartForm/CartForm"));
const CartDetail = lazy(() =>
  import("../../features/admin/Cartdetail/CartDetail")
);
const Product = lazy(() => import("../../features/admin/Product/Product"));
const Users = lazy(() => import("../../features/admin/users/Users"));

export default [
  {
    label: "Dashboard",
    path: "",
    showInMenu: true,
    component: <Dashboard />,
    icon: <DashboardIcon />,
    roles: ["admin"],
    hasSubRoutes: false,
  },
  {
    label: "Payments",
    path: "/user-payment",
    showInMenu: true,
    component: <Payment />,
    icon: <PaymentIcon />,
    roles: ["admin", "users", "customer"],
    hasSubRoutes: false,
  },
  {
    label: "Customers",
    path: "customers",
    showInMenu: true,
    component: <Customers />,
    icon: <GroupIcon />,
    roles: ["admin", "users", "customer"],
    hasSubRoutes: false,
  },
  {
    label: "Admin",
    path: "admin",
    showInMenu: true,
    component: <Users />,
    icon: <AdminPanelSettingsIcon />,
    roles: ["admin", "users", "customer"],
    hasSubRoutes: false,
  },

  {
    label: "Orders",
    path: "orders",
    showInMenu: true,
    component: <Order />,
    icon: <BookmarkBorderIcon />,
    roles: ["admin", "users", "customer"],
    hasSubRoutes: false,
  },
  {
    label: "Shipping",
    path: "shipping",
    showInMenu: true,
    component: <Shipping />,
    icon: <LocalShippingIcon />,
    roles: ["admin", "users", "customer"],
    hasSubRoutes: false,
  },
  {
    label: "Products",
    path: "product",
    showInMenu: true,
    component: <Product />,
    icon: <ProductionQuantityLimitsIcon />,
    roles: ["admin", "users", "customer"],
    hasSubRoutes: false,
  },

  {
    label: "CartDetails",
    path: "cartdetails",
    showInMenu: true,
    component: <CartDetail />,
    icon: <AddCardIcon />,
    roles: ["admin", "users", "customer"],
    hasSubRoutes: false,
  },
  {
    label: "CartForm",
    path: "cartform",
    showInMenu: true,
    component: <Cartform />,
    icon: <AddCardIcon />,
    roles: ["admin", "users", "customer"],
    hasSubRoutes: false,
  },
];
