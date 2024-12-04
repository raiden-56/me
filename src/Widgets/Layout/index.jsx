import { Grid } from "@mui/material";
import SideMenuBar from "../SideMenuBar";
import Dashboard from "../../Pages/Dashboard";
import TopHeader from "../TopHeader";

const Layout = () => {
  return (
    <Grid container>
      <Grid className="nav-header" item lg={12} xs={12} sm={12}>
        <TopHeader />
      </Grid>
      <Grid item xs={2.5} lg={2.5}>
        <SideMenuBar />
      </Grid>
      <Grid item md={9.5} lg={9.5}>
        <Dashboard />
      </Grid>
    </Grid>
  );
};

export default Layout;
