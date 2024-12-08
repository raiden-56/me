import { Stack } from "@mui/material";
import React from "react";
import SkillsSquareCards from "../SkillsSquareCards";
const cardData = [
  {
    img: "",
    name: "Adobe Photoshop",
    altName: "Adobe Photoshop",
  },
];
function WebSkillsCard() {
  return (
    <>
      <Stack sx={{ backgroundColor: "var( --color-dark-blue)" }}>
        {cardData &&
          cardData.length > 0 &&
          cardData.map((i, index) => {
            return <SkillsSquareCards key={index} data={i} />;
          })}
      </Stack>
    </>
  );
}

export default WebSkillsCard;
