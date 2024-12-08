import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./topHeader.css";
import WhatsApp from "../../assets/icons/whatsapp-line.svg";
import Instagram from "../../assets/icons/instagram-line.svg";
import LinkedIn from "../../assets/icons/linkedin-fill.svg";
import Behance from "../../assets/icons/behance-fill.svg";
import Logo from "../../assets/icons/logo.svg";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("dark");

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
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

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={2}
        sx={{ height: "6rem" }}
      >
        <Stack direction={"row"} gap={2} alignItems={"center"}>
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
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
          <IconButton onClick={handleModeClick}>
            {mode === "light" ? (
              <LightModeIcon style={{ fill: "#000" }} />
            ) : (
              <DarkModeIcon style={{ fill: "#fff" }} />
            )}
          </IconButton>
          <IconButton
            aria-label="open navigation"
            onClick={toggleDrawer(true)}
            sx={{
              cursor: "pointer",
            }}
          >
            <NotesOutlinedIcon
              style={{ fill: "var(--color-white)" }}
              fontSize="large"
            />
          </IconButton>
        </Stack>
      </Stack>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "var(--color-dark-blue)",
            color: "var(--color-white)",
            zIndex: 99999999999,
          },
        }}
      >
        <Box sx={{ position: "absolute", top: 20, right: 20 }}>
          <IconButton
            aria-label="close navigation"
            onClick={toggleDrawer(false)}
          >
            <CloseIcon sx={{ fontSize: 50, color: "var(--color-primary)" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            position: "relative",
            top: "18%",
            width: "100%",
            textAlign: "center",
            mt: 3,
          }}
        >
          <List>
            {["HOME", "ABOUT ME", "SKILLS", "PORTFOLIO", "CONTACT"].map(
              (text, index) => (
                <ListItem button key={index}>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "36px",
                        textAlign: "center",
                        transition: "0.3s",
                        "&:hover": { color: "#f1f1f1" },
                      },
                    }}
                  />
                </ListItem>
              )
            )}
          </List>
          <Stack direction={"row"} justifyContent={"center"} mt={5} gap={3}>
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
        </Box>
      </Drawer>
    </>
  );
};

export default TopHeader;
