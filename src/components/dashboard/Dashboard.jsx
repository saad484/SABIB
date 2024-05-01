// Dashboard.jsx

import React from "react";
import { useRoutes } from "react-router-dom";
import ThemeRoutes from "../dashboard/routes/Router";
import "../../assets/scss/style.scss";
import LogoHeader from "../../components/form/LogoHeader";
import LandingFormPage from "../../components/form/LandingFormPage";
import FormProvider from "../form/store/FormProvider";

function Dashboard() {
  const routing = useRoutes(ThemeRoutes);

    return (
    <FormProvider>
    <div className="app">
      <LogoHeader />
      <LandingFormPage />
    </div>
  </FormProvider>);
    //  <div className="dark">{routing}</div>);
}

export default Dashboard;
