import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Metaverse from "../../assets/icons/meta-verse.jpg";
import TikTakToe from "../../assets/icons/tik-tak-toe.svg";
import Chatbot from "../../assets/icons/chatbot.svg";
import ArrowRight from "../../assets/icons/right-arrow.svg";
import "./portfolio.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Portfolio() {
  const PortfolioData = [
    {
      img: Metaverse,
      altName: "metaverse",
      projectName: "Metaverse",
      url: "https://raiden-56.github.io/metaverse/",
    },
    {
      img: TikTakToe,
      altName: "tik-tak-toe",
      projectName: "Tik Tak Toe",
      url: "https://raiden-56.github.io/tik_tak_toe/",
    },
    {
      img: Chatbot,
      altName: "Chatbot",
      projectName: "Chatbot",
      url: "https://raiden-56.github.io/chatbot/",
    },
  ];
  const handleButtonClick = (url) => {
    if (url) window.open(url, "_blank");
  };
  return (
    <>
      <Stack id="portfolio" px={4} sx={12} mt={6} direction={"column"}>
        <Typography textAlign={"center"} className="title">
          MY RECENT PORTFOLIO
        </Typography>
        <Grid item md={12} sx={12} sm={12}>
          <Typography textAlign={"center"} className="main-title">
            Elevate your brand to new heights with our portfolio expertise
          </Typography>
        </Grid>
      </Stack>
      <Grid container p={2}>
        {PortfolioData &&
          PortfolioData.length > 0 &&
          PortfolioData.map((port, index) => {
            return (
              <Grid
                key={index}
                item
                md={4}
                xs={12}
                sm={12}
                lg={4}
                xl={4}
                xxl={4}
                p={3}
              >
                <Stack className="img-container">
                  <img className="image" src={port.img} alt={port.altName} />
                  <Stack className="overlay">
                    <Stack className="text" gap={2}>
                      <Typography fontSize={"var(--font-24)"}>
                        {port.projectName}
                      </Typography>
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => handleButtonClick(port.url)}
                        width={"30%"}
                        src={ArrowRight}
                        alt=""
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
      </Grid>
      <Stack
        justifyContent={"center"}
        textAlign={"center"}
        display={"grid"}
        mx={"0 auto"}
      >
        <Button
          endIcon={<ArrowForwardIcon />}
          px={5}
          className="btn-btn"
          variant="contained"
          textAlign="center"
          mx={"0 auto"}
        >
          View More...
        </Button>
      </Stack>
    </>
  );
}

export default Portfolio;
