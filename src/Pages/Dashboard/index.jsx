import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./dashboard.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AboutUs from "../AboutUs";
import Skills from "../Skills";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import ScrollToTopButton from "../../Widgets/ScrollTop";
import Footer from "../../Widgets/Footer";
import { useAnimation } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Dashboard() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 10, opacity: 1, scale: 1 });

    return () => {};
  }, [controls]);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/19jhAvwyYK3Bf2130Y7TTrXLSceR1_VTD/view?usp=drive_link",
      "_blank"
    );
  };
  return (
    <>
      <ScrollToTopButton />
      <div className="banner-bg" id="banner-img">
        <Box className="banner-content">
          <Typography
            color={"var(--color-light-grey)"}
            className="banner-font"
            textTransform={"uppercase"}
          >
            Hi, I'm <span style={{ color: "#8750F7" }}>Ganesh!</span>
          </Typography>
          <Typography
            color={"var(--color-light-grey)"}
            letterSpacing={2}
            fontSize={"var(--font-24)"}
            fontStyle={"italic"}
            mb={2}
          >
            <Typewriter
              words={[
                "Front End Developer",
                "Graphic Designer",
                "UI-UX Designer",
                "Motion Graphic Designer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Typography>
          <Grid container>
            <Grid item xl={10.5} lg={10.5} md={10.5} sm={12} xs={12}>
              <Typography color={"var(--color-light-grey)"} mb={3}>
                Innovative Frontend Developer and UI/UX Designer with 2+ years
                of experience crafting responsive web applications and
                user—centric designs. Proficient in HTML, Css, JavaScript,
                React.js, Redux, Material UI, and Adobe Creative Suite
              </Typography>
            </Grid>
          </Grid>
          <Button
            className="btn-btn"
            endIcon={<FileDownloadOutlinedIcon />}
            variant="contained"
            onClick={handleResumeClick}
          >
            Download Cv
          </Button>
        </Box>
      </div>
      <div className="mobile-bg" id="mobile-banner">
        <Stack mb={3} textAlign={"center"} className="mobile-content">
          <Typography
            color={"#fff"}
            className="mobile-font"
            textTransform={"uppercase"}
            fontSize={"42px"}
          >
            Hi, I'm <span style={{ color: "#8750F7" }}>Ganesh!</span>
          </Typography>
          <Typography
            color={"#fff"}
            letterSpacing={2}
            fontSize={"var(--font-24)"}
            fontStyle={"italic"}
            mb={2}
          >
            <Typewriter
              words={[
                "Front End Developer",
                "Graphic Designer",
                "UI-UX Designer",
                "Motion Graphic Designer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Typography>
          <Stack display={"grid"} justifyContent={"center"}>
            <Button
              className="btn-btn"
              endIcon={<FileDownloadOutlinedIcon />}
              variant="contained"
              onClick={handleResumeClick}
            >
              Download Cv
            </Button>
          </Stack>
        </Stack>
      </div>
      <AboutUs />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Dashboard;
