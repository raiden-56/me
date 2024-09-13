import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import SkillsCard from "../../../Widgets/SkillsCard";
import WebSkillsCard from "../../../Widgets/SkillsCard/WebSkillsCard";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

function SkillsSection() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  const [toggle, setToggle] = useState(true);

  const handleCheckBox = () => {
    if (toggle === true) {
      setToggle(false);
    } else if (toggle === false) {
      setToggle(true);
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
        <Typography color={"var(--color-white)"}>Graphic Design</Typography>
        <PinkSwitch
          {...label}
          onClick={() => setToggle((prev) => !prev)}
          checked={toggle}
        />
        <Typography color={"var(--color-white)"}>Web Development</Typography>
      </Stack>
      {toggle === true ? (
        <>
          <SkillsCard />
        </>
      ) : (
        // <p style={{ color: "#fff" }}>Hi</p>
        <WebSkillsCard />
      )}
    </>
  );
}

export default SkillsSection;
