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
import { AnimatePresence, useAnimation, motion } from "framer-motion";

function Dashboard() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 10, opacity: 1, scale: 1 });

    // Trigger the animation on component mount
    // controls.start({ y: 10, opacity: 1, scale: 1 });

    // window.addEventListener("scroll", handleScroll);

    return () => {
      // window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/18OEv518rjcZRdK3eAQKfxvbeK57NgfJK/view?usp=drive_link",
      "_blank"
    );
  };
  return (
    <>
      <ScrollToTopButton />
      <AnimatePresence>
        <div id="banner-img">
          <motion.div
            initial={{ y: 250, opacity: 0, scale: 0.8 }}
            animate={controls}
            transition={{ ease: "easeOut", duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <Box className="banner-content">
              <Typography
                color={"#fff"}
                className="banner-font"
                textTransform={"uppercase"}
              >
                Hi, I'm <span style={{ color: "#F2AA4CFF" }}>Ganesh!</span>{" "}
                <br />
                SOftware <span style={{ color: "#F2AA4CFF" }}>Engineer</span>
              </Typography>
              <Typography color={"var(--color-light-grey)"} mb={3}>
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for detail, I
                specialize in translating complex ideas into user- friendly
                interfaces that captivate and engage.
              </Typography>
              <Button
                className="btn-btn"
                endIcon={<FileDownloadOutlinedIcon />}
                variant="contained"
                onClick={handleResumeClick}
              >
                Download Cv
              </Button>
            </Box>
          </motion.div>
        </div>
      </AnimatePresence>
      <AboutUs />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Dashboard;
