import { Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import MyTabs from "../../Widgets/Tabs";
import Education from "./SkillSections/Education";
import { useAnimation } from "framer-motion";
import Biography from "./SkillSections/MyProjects";
import SkillsSection from "./SkillSections/SkillsSection";
import Experience from "./SkillSections/Experience";
import MyAwards from "./SkillSections/MyAwards";

function Skills() {
  const controls = useAnimation();

  const tabs = [
    {
      label: "Experience",
      content: <Experience />,
    },
    {
      label: "Education",
      content: <Education />,
    },
    {
      label: "Projects",
      content: <Biography />,
    },
    {
      label: "Skills",
      content: <SkillsSection />,
    },
    {
      label: "Awards",
      content: <MyAwards />,
    },
  ];

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
    <>
      <div
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ ease: "easeOut", duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <Stack id="skill" container px={4} mt={18} direction={"column"}>
          <Typography textAlign={"center"} className="title">
            MY skills
          </Typography>
          <Grid item md={12} sm={12}>
            <Typography textAlign={"center"} className="main-title">
              Crafting stories through design
              <br /> and innovation
            </Typography>
          </Grid>
          <MyTabs tabs={tabs} />
        </Stack>
      </div>
    </>
  );
}

export default Skills;
