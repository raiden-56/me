import HomePage from "../../Pages/Dashboard/index";
import Layout from "../../Widgets/Layout/index";

export const homePath = "/";

export const routesConfig = [
  {
    path: homePath,
    component: HomePage,
    layout: Layout,
  },
];
