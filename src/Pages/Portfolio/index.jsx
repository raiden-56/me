import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FirstPortfolio from "../../assets/images/firstPortfolio.jpg";
import SecondPortfolio from "../../assets/images/secondPortfolio.jpg";
import ThirdPortfolio from "../../assets/images/thirdPortfolio.jpg";
import FourthPortfolio from "../../assets/images/fourthPortfolio.jpg";
import FifthPortfolio from "../../assets/images/fifthPortfolio.jpg";

function Portfolio() {
  return (
    <>
      <Stack container px={4} mt={18} direction={"column"}>
        <Typography textAlign={"center"} className="title">
          MY RECENT PORTFOLIO
        </Typography>
        <Grid item md={12} sm={12}>
          <Typography textAlign={"center"} className="main-title">
            Elevate your brand to new heights with our portfolio expertise
          </Typography>
        </Grid>
      </Stack>
      <Grid container px={4} mt={8}>
        <Grid item md={6} sm={12} pr={4}>
          <img
            style={{ width: "100%", borderRadius: "8px" }}
            src={FirstPortfolio}
            alt=""
          />
        </Grid>
        <Grid item md={6} pr={4} sm={12}>
          <img
            style={{ width: "100%", borderRadius: "8px" }}
            src={SecondPortfolio}
            alt=""
          />
        </Grid>
        <Grid item md={4} pr={4} mt={4} sm={12}>
          <img
            style={{ width: "100%", borderRadius: "8px" }}
            src={ThirdPortfolio}
            alt=""
          />
        </Grid>
        <Grid item md={4} pr={4} mt={4} sm={12}>
          <img
            style={{ width: "100%", borderRadius: "8px" }}
            src={FourthPortfolio}
            alt=""
          />
        </Grid>
        <Grid item md={4} pr={4} mt={4} sm={12}>
          <img
            style={{ width: "100%", borderRadius: "8px" }}
            src={FifthPortfolio}
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Portfolio;
