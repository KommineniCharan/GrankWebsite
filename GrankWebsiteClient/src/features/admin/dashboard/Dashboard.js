import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/slices/AuthSlice";
import DashboardHead from "../dashboard/DashboardHead";
import DashboardChart from "./DashboardChart";

const UserProfile = () => {
  const loggedUser = useSelector(selectUser);
  const { name, email, mobile, role } = loggedUser;

  return (
    <>
      <DashboardHead />
      <DashboardChart />
    </>
  );
};

export default UserProfile;
