import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MyTabs from "../../Widgets/Tabs";
import Education from "./SkillSections/Education";
import { useAnimation } from "framer-motion";
import Biography from "./SkillSections/Biography";
import SkillsSection from "./SkillSections/SkillsSection";
import Experience from "./SkillSections/Experience";

function Skills() {
  const [value, setValue] = useState(0);
  const controls = useAnimation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "Experience",
      content: (
        <>
          <Experience />
        </>
      ),
    },
    {
      label: "Education",
      content: (
        <>
          <Education />
        </>
      ),
    },
    {
      label: "Biography",
      content: <Biography />,
    },
    {
      label: "Skills",
      content: <SkillsSection />,
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
        <Stack container px={4} mt={18} direction={"column"}>
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
