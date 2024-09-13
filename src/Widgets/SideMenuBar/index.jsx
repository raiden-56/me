import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import "../SideMenuBar/sideMenu.css";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Home from "../../assets/icons/home.svg";
import About from "../../assets/icons/about.svg";
import Skill from "../../assets/icons/skills.svg";
import Portfolio from "../../assets/icons/portfolio.svg";
import Contact from "../../assets/icons/contact.svg";
import WhatsApp from "../../assets/icons/whatsapp-line.svg";
import Instagram from "../../assets/icons/instagram-line.svg";
import LinkedIn from "../../assets/icons/linkedin-fill.svg";
import Behance from "../../assets/icons/behance-fill.svg";

function SideMenuBar() {
  const MenuData = [
    {
      icon: Home,
      name: "HOME",
      id: "",
    },
    {
      icon: About,
      name: "About Me",
      id: "about_us",
    },
    {
      icon: Skill,
      name: "Skills",
      id: "",
    },
    {
      icon: Portfolio,
      name: "Portfolio",
      id: "",
    },
    {
      icon: Contact,
      name: "Contact",
      id: "",
    },
  ];
  const SocialMedia = [
    {
      img: WhatsApp,
      path: "",
    },
  ];
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
    window.open("www.instagram.com/ganesh__.67/", "_blank");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Add space at the top after scrolling
      // setTimeout(() => {
      window.scrollBy(0, -20);
      // }, 100); // Add a slight delay before scrolling up
    }
  };

  return (
    <Stack p={4} className="sideMenu-bar">
      <Typography textAlign={"center"} my={3} color={"#fff"}>
        Ganesh
      </Typography>
      <Stack>
        {MenuData.map((data, index) => {
          return (
            <>
              <Stack
                direction={"row"}
                gap={2}
                mb={3}
                pr={4}
                alignItems={"center"}
                className="sideMenuTab"
                onClick={() => scrollToSection(data.id)}
              >
                <Stack key={index} className="icon-box">
                  <img className="w-100" src={data.icon} alt="" />
                </Stack>
                <Typography
                  variant="h5"
                  textTransform={"uppercase"}
                  color={"#fff"}
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
