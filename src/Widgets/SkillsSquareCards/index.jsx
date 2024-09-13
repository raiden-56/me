import { Stack, Typography } from "@mui/material";
import React from "react";

function SkillsSquareCards(props) {
  return (
    <>
      <Stack>
        <img src={props.data.img} alt={props.data.altName} />
        <Typography color={"var(--color-white)"} style={{ color: "#fff" }}>
          {props.data.name}
        </Typography>
      </Stack>
    </>
  );
}

export default SkillsSquareCards;
