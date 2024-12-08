import { Grid, Radio, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Figma from "../../../assets/icons/figma.svg";
import PremierPro from "../../../assets/icons/premiere-pro.svg";
import Photoshop from "../../../assets/icons/photoshop.svg";
import AfterEffect from "../../../assets/icons/after-effects.svg";
import Illustrator from "../../../assets/icons/illustrator.svg";
import LightRoom from "../../../assets/icons/photoshop-lightroom.svg";
import InDesign from "../../../assets/icons/indesign.svg";
import Html from "../../../assets/icons/html.svg";
import Css from "../../../assets/icons/css.svg";
import JavaScript from "../../../assets/icons/js.svg";
import Bootstrap from "../../../assets/icons/bootstrap.svg";
import Jquery from "../../../assets/icons/jquery.svg";
import MaterialUi from "../../../assets/icons/material-ui.svg";
import ReactJs from "../../../assets/icons/react-js.svg";
import Redux from "../../../assets/icons/redux.svg";
import Git from "../../../assets/icons/git.svg";
import GitHub from "../../../assets/icons/github.svg";

function SkillsSection() {
  const [selectedValue, setSelectedValue] = useState("b");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const DesignItem = [
    {
      img: Figma,
      name: "Figma",
    },
    {
      img: Photoshop,
      name: "Adobe Photoshop",
    },
    {
      img: PremierPro,
      name: "Adobe Premier Pro",
    },
    {
      img: AfterEffect,
      name: "Adobe After Effects",
    },
    {
      img: LightRoom,
      name: "Adobe Lightroom",
    },
    {
      img: Illustrator,
      name: "Adobe Illustrator",
    },
    {
      img: InDesign,
      name: "Adobe Indesign",
    },
  ];

  const DevelopmentItem = [
    {
      img: Html,
      name: "HTML",
    },
    {
      img: Css,
      name: "CSS",
    },
    {
      img: JavaScript,
      name: "Javascript",
    },
    {
      img: Bootstrap,
      name: "Bootstrap",
    },
    {
      img: Jquery,
      name: "Jquery",
    },
    {
      img: MaterialUi,
      name: "Material Ui",
    },
    {
      img: ReactJs,
      name: "React Js",
    },
    {
      img: Redux,
      name: "Redux",
    },
    {
      img: Git,
      name: "Git",
    },
    {
      img: GitHub,
      name: "Git Hub",
    },
  ];

  const renderContent = () => {
    switch (selectedValue) {
      case "a":
        return (
          <Grid container>
            {DesignItem &&
              DesignItem.length > 0 &&
              DesignItem.map((design) => {
                return (
                  <Grid item xl={3} lg={3} md={3} xs={6} sm={4} p={1}>
                    <Stack
                      alignItems={"center"}
                      justifyContent={"center"}
                      className="skill-card"
                      p={6}
                      sx={{
                        backgroundColor: "var(--color-dark-blue)",
                        borderRadius: "8px",
                        boxShadow: "initial",
                      }}
                    >
                      <img
                        className="skill-img"
                        width={"40%"}
                        src={design.img}
                        alt=""
                      />
                      <Typography
                        fontWeight={"500"}
                        mt={2}
                        color={"var(--color-white)"}
                      >
                        {design.name}
                      </Typography>
                    </Stack>
                  </Grid>
                );
              })}
          </Grid>
        );
      case "b":
        return (
          <Grid container>
            {DevelopmentItem &&
              DevelopmentItem.length > 0 &&
              DevelopmentItem.map((design) => {
                return (
                  <Grid item xl={3} lg={3} md={3} xs={6} sm={4} p={1}>
                    <Stack
                      p={6}
                      alignItems={"center"}
                      justifyContent={"center"}
                      className="skill-card"
                      sx={{
                        backgroundColor: "var(--color-dark-blue)",
                        borderRadius: "8px",
                        boxShadow: "initial",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        width={"40%"}
                        src={design.img}
                        className="skill-img"
                        alt=""
                      />
                      <Typography
                        fontWeight={"500"}
                        mt={2}
                        color={"var(--color-white)"}
                      >
                        {design.name}
                      </Typography>
                    </Stack>
                  </Grid>
                );
              })}
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Stack
        width={"100%"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
      >
        <Radio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          sx={{
            color: "var(--color-primary)",
            "&.Mui-checked": {
              color: "var(--color-primary)",
            },
          }}
          inputProps={{ "aria-label": "A" }}
        />
        <Typography color={"var(--color-white)"}>Graphic Design</Typography>
        <Radio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          sx={{
            color: "var(--color-primary)",
            "&.Mui-checked": {
              color: "var(--color-primary)",
            },
          }}
          inputProps={{ "aria-label": "B" }}
        />
        <Typography color={"var(--color-white)"}>Web Development</Typography>
      </Stack>
      <Stack
        mt={3}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {renderContent()}
      </Stack>
    </>
  );
}

export default SkillsSection;
