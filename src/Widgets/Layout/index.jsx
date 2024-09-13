import { Grid, Stack, Typography } from "@mui/material";
import SideMenuBar from "../SideMenuBar";
import Dashboard from "../../Pages/Dashboard";

const Layout = () => {
  return (
    <Grid container>
      {/* Header */}
      <Grid item xs={2.5} lg={2.5}>
        <SideMenuBar />
      </Grid>

      {/* Menubar */}
      <Grid item md={9.5} lg={9.5}>
        <Dashboard />
      </Grid>
    </Grid>
  );
};

export default Layout;
