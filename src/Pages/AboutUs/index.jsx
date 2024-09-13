import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Ambition from "../../assets/icons/ambition.svg";
import Goal from "../../assets/icons/goal.svg";
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
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ ease: "easeOut", duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <section id="about_us">
        <Stack container px={4} mt={4} pt={4} direction={"column"}>
          <Typography className="title">About us</Typography>
          <Grid item md={8} sm={12}>
            <Typography className="main-title">
              Crafting stories through design and innovation
            </Typography>
          </Grid>
          <Grid container>
            <Grid item md={6} sm={12} my={3}>
              <Stack mt={2} gap={1}>
                <img style={{ width: "18%" }} src={Ambition} alt="ambition" />
                <Typography color={"var(--color-light-grey)"}>
                  I'm a passionate UI/UX designer with a mission to create
                  delightful and intuitive digital experiences. With a strong
                  foundation in design principles and a keen eye for detail, I
                  specialize in translating complex ideas into user- friendly
                  interfaces that captivate and engage.
                </Typography>
                <img
                  style={{ width: "18%", margin: "20px 0" }}
                  src={Goal}
                  alt="goal"
                />
                <Typography color={"var(--color-light-grey)"}>
                  I'm a passionate UI/UX designer with a mission to create
                  delightful and intuitive digital experiences. With a strong
                  foundation in design principles and a keen eye for detail, I
                  specialize in translating complex ideas into user- friendly
                  interfaces that captivate and engage.
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={6} sm={12}>
              <div className="img-container">
                <img width={"100%"} src={About} alt="aboutimg" />
              </div>
              <Box className="years-card">
                <Stack direction={"row"} alignItems={"center"} gap={2}>
                  <img width={"30%"} src={Certificate} alt="" />
                  <Stack>
                    <Typography className="year-text">01+</Typography>
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
    </motion.div>
  );
}

export default AboutUs;
