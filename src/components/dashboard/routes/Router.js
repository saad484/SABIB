import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../../UI/Dashboard/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../../UI/Dashboard/Starter.js"));
const About = lazy(() => import("../../UI/Dashboard/About.js"));
const Alerts = lazy(() => import("../../UI/Dashboard/ui/Alerts.js"));
const Badges = lazy(() => import("../../UI/Dashboard/ui/Badges"));
const Buttons = lazy(() => import("../../UI/Dashboard/ui/Buttons"));
const Cards = lazy(() => import("../../UI/Dashboard/ui/Cards"));
const Grid = lazy(() => import("../../UI/Dashboard/ui/Grid"));
const Tables = lazy(() => import("../../UI/Dashboard/ui/Tables"));
const Forms = lazy(() => import("../../UI/Dashboard/ui/Forms"));
const Breadcrumbs = lazy(() => import("../../UI/Dashboard/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="starter" /> },
      { path: "starter", exact: true, element: <Starter /> },
      { path: "about", exact: true, element: <About /> },
      { path: "alerts", exact: true, element: <Alerts /> },
      { path: "badges", exact: true, element: <Badges /> },
      { path: "buttons", exact: true, element: <Buttons /> },
      { path: "cards", exact: true, element: <Cards /> },
      { path: "grid", exact: true, element: <Grid /> },
      { path: "table", exact: true, element: <Tables /> },
      { path: "forms", exact: true, element: <Forms /> },
      { path: "breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
