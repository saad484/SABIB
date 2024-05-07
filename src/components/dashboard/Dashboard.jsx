// Dashboard.jsx

import React from "react";
import { useRoutes } from "react-router-dom";
import ThemeRoutes from "../dashboard/routes/Router";
import "../../assets/scss/style.scss";

import FormProvider from "../form/store/FormProvider";

function Dashboard() {
  const routing = useRoutes(ThemeRoutes);

  return (<div className="dark">{routing}</div>);
}

export default Dashboard;
