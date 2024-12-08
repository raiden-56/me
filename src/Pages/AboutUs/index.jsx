import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Goal from "../../assets/icons/about-me.svg";
import About from "../../assets/images/about-img.png";
import "./about.css";
import Certificate from "../../assets/icons/certificate.svg";

function AboutUs() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1) {
        controls.start({ y: -10, opacity: 1 });
      } else {
        controls.start({ y: 50, opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <section id="about_us">
      <Stack
        container
        px={4}
        sx={{
          mt: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 },
        }}
        direction={"column"}
      >
        <Typography className="title">About me</Typography>
        <Grid item md={11} sm={12}>
          <Typography className="main-title">
            Unveiling My Journey: Passion, Skills, and Aspirations
          </Typography>
        </Grid>
        <Grid container>
          <Grid display={"flex"} item md={6} sm={12} my={3}>
            <Stack mt={2} gap={1}>
              <img
                style={{ width: "18%", margin: "20px 0" }}
                src={Goal}
                alt="goal"
              />
              <Typography color={"var(--color-light-grey)"}>
                I'm a passionate software engineer having{" "}
                <strong>
                  <u>2+ years</u>
                </strong>{" "}
                at NSPlus Technology Pvt Ltd, with expertise in crafting dynamic
                web applications using technologies like React JS, Redux, HTML5,
                CSS3, and JavaScript. With a flair for design, I bring
                creativity to life through tools like Adobe Photoshop,
                Illustrator, and Figma. Blending technical proficiency with
                artistic vision, I strive to deliver seamless digital
                experiences that leave a lasting impression.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6} sm={12}>
            <div className="about-container">
              <img width={"100%"} src={About} alt="aboutimg" />
            </div>
            <Box className="years-card">
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <img width={"30%"} src={Certificate} alt="" />
                <Stack>
                  <Typography className="year-text">02+</Typography>
                  <Typography color={"var(--color-white)"}>
                    Years Of Experience
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </section>
  );
}

export default AboutUs;
