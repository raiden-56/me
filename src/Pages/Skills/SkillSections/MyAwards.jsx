import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Arrow from "../../../assets/icons/arrow.svg";
import SoloAward from "../../../assets/icons/solo-award.svg";
import GroupAward from "../../../assets/icons/group-award.svg";

function MyAwards() {
  const AwardData = [
    {
      companyName: "NSPlus Technology Pvt Ltd",
      img: SoloAward,
      AwardName: "Customer Impact Award",
      year: "2024",
    },
    {
      companyName: "NSPlus Technology Pvt Ltd",
      img: GroupAward,
      AwardName: "Team Collaboration Award",
      year: "2024",
    },
    {
      companyName: "Narayan Solution Pvt Ltd",
      img: SoloAward,
      AwardName: "Customer Impact Award",
      year: "2023",
    },
    {
      companyName: "Narayan Solution Pvt Ltd",
      img: GroupAward,
      AwardName: "Team Collaboration Award",
      year: "2023",
    },
  ];
  return (
    <>
      <Grid container>
        {AwardData &&
          AwardData.length > 0 &&
          AwardData.map((award) => {
            return (
              <Grid item xl={6} lg={6} xs={12} sm={12} md={6} px={2} mb={3}>
                <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
                  <img width={"6%"} src={Arrow} alt="arrow" />
                  <Stack>
                    <Typography color={"var(--color-white)"}>
                      {award.companyName}
                    </Typography>
                    <hr
                      style={{
                        margin: "8px 0 10px 0",
                        width: "12%",
                        border: "2px solid var(--color-primary)",
                        borderRadius: "50px",
                      }}
                    />
                    <img
                      style={{ marginTop: "1rem" }}
                      width={"18%"}
                      src={award.img}
                      alt="award"
                    />
                    <Typography
                      fontSize={"var(--font-24)"}
                      py={1}
                      color={"var(--color-white)"}
                      fontWeight={"var(--font-weight-600)"}
                    >
                      {award.AwardName}
                    </Typography>
                    <Typography
                      pb={1}
                      fontSize={"var(--font-20)"}
                      color={"var(--color-white)"}
                    >
                      {award.year}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default MyAwards;
