import React from "react";

import Login from "../../features/frontend/authentication/Login";
import Register from "../../features/frontend/authentication/Register";
import AddToCart from "../../features/frontend/addtocart/AddToCart";

export default [
  {
    label: "SignIn",
    path: "/login",
    showInMenu: true,
    addRoute: true,
    component: <Login />,
    authenticated: "no",
  },
  // {
  //   label: "New User",
  //   path: "register",
  //   showInMenu: true,
  //   addRoute: true,
  //   component: <Register />,
  //   authenticated: "no",
  // },
  {
    label: "Profile",
    path: "/secured/customers",
    showInMenu: true,
    addRoute: false,
    component: <Register />,
    authenticated: "yes",
  },
  // {
  //   label: "addtocart",
  //   path: "addtocart",
  //   showInMenu: true,
  //   addRoute: true,
  //   component: <AddToCart />,
  //   authenticated: "no",
  // },
];
