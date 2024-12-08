import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "../SideMenuBar/sideMenu.css";
import Home from "../../assets/icons/home.svg";
import About from "../../assets/icons/about.svg";
import Skill from "../../assets/icons/skills.svg";
import Portfolio from "../../assets/icons/portfolio.svg";
import Contact from "../../assets/icons/contact.svg";
import WhatsApp from "../../assets/icons/whatsapp-line.svg";
import Instagram from "../../assets/icons/instagram-line.svg";
import LinkedIn from "../../assets/icons/linkedin-fill.svg";
import Behance from "../../assets/icons/behance-fill.svg";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Logo from "../../assets/icons/logo.svg";

function SideMenuBar() {
  const [mode, setMode] = useState("dark");
  const MenuData = [
    {
      icon: Home,
      name: "HOME",
      id: "banner-img",
    },
    {
      icon: About,
      name: "About Me",
      id: "about_us",
    },
    {
      icon: Skill,
      name: "Skills",
      id: "skill",
    },
    {
      icon: Portfolio,
      name: "Portfolio",
      id: "portfolio",
    },
    {
      icon: Contact,
      name: "Contact",
      id: "contact",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollBy(0, -20);
    }
  };

  const handleIconClick = () => {
    const phoneNumber = "+91 9110428294";
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappWebUrl, "_blank");
  };

  const handleLinked = () => {
    window.open("https://www.linkedin.com/in/ganeshmesta56/", "_blank");
  };

  const handleBehance = () => {
    window.open("https://www.behance.net/ganeshmesta56/", "_blank");
  };

  const handleInsta = () => {
    window.open("https://www.instagram.com/ganesh__.67/", "_blank");
  };

  const handleModeClick = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    if (mode === "dark") {
      document.documentElement.style.setProperty("--color-primary", "#8750F7");
      document.documentElement.style.setProperty("--color-black", "#ffffff");
      document.documentElement.style.setProperty(
        "--color-dark-blue",
        "#f0f0f0"
      );
      document.documentElement.style.setProperty(
        "--color-light-grey",
        "#333333"
      );
      document.documentElement.style.setProperty("--color-white", "#02050a");
      document.documentElement.style.setProperty(
        "--color-border-grey",
        "#cccccc"
      );
      document.body.style.backgroundColor = "var(--color-white)";
    } else {
      document.documentElement.style.setProperty("--color-primary", "#8750F7");
      document.documentElement.style.setProperty("--color-black", "#02050a");
      document.documentElement.style.setProperty(
        "--color-dark-blue",
        "#09101a"
      );
      document.documentElement.style.setProperty(
        "--color-light-grey",
        "#a2a2a2"
      );
      document.documentElement.style.setProperty("--color-white", "#fff");
      document.documentElement.style.setProperty(
        "--color-border-grey",
        "#8e8e8e"
      );
      document.body.style.backgroundColor = "var(--color-black)";
    }
  };

  return (
    <Stack p={4} className="sideMenu-bar">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={2}
      >
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <img width={"20%"} src={Logo} alt="logo" />
          <Typography
            letterSpacing={2}
            fontWeight={"600"}
            textAlign={"center"}
            color={"var(--color-white)"}
            fontSize={"var(--font-24)"}
          >
            GANESH
          </Typography>
        </Stack>
        <IconButton onClick={handleModeClick}>
          {mode === "light" ? (
            <LightModeIcon style={{ fill: "#000" }} />
          ) : (
            <DarkModeIcon style={{ fill: "#fff" }} />
          )}
        </IconButton>
      </Stack>
      <Stack mt={2.5}>
        {MenuData.map((data, index) => {
          return (
            <>
              <Stack
                key={index}
                direction={"row"}
                gap={2}
                mb={3}
                pr={4}
                alignItems={"center"}
                className="sideMenuTab"
                onClick={() => scrollToSection(data.id)}
              >
                <Stack className="icon-box">
                  <img className="w-100" src={data.icon} alt="" />
                </Stack>
                <Typography
                  variant="h5"
                  textTransform={"uppercase"}
                  color={"var(--color-white)"}
                  className="sideMenu-text"
                >
                  {data.name}
                </Typography>
              </Stack>
            </>
          );
        })}
      </Stack>
      <Stack direction={"row"} mt={2} gap={1}>
        <Stack className="icon-box" onClick={handleIconClick}>
          <img src={WhatsApp} alt="" />
        </Stack>
        <Stack className="icon-box" onClick={handleInsta}>
          <img src={Instagram} alt="" />
        </Stack>
        <Stack className="icon-box" onClick={handleLinked}>
          <img src={LinkedIn} alt="" />
        </Stack>
        <Stack className="icon-box" onClick={handleBehance}>
          <img src={Behance} alt="" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SideMenuBar;
