import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Arrow from "../../../assets/icons/arrow.svg";

function MyProjects() {
  const projectData = [
    {
      projectName: "PMS",
      skills: "React JS, Material UI, Redux, Scss",
      content:
        "Developed a performance management system using React.js, optimizing workflows and team productivity",
    },
    {
      projectName: "Titan",
      skills: "React, Material UI, JavaScript",
      content:
        "A project management tool with real-time collaboration features.",
    },
    {
      projectName: "Titan",
      skills: "React, Material UI, JavaScript",
      content:
        "A project management tool with real-time collaboration features.",
    },
    {
      projectName: "Titan",
      skills: "React, Material UI, JavaScript",
      content:
        "A project management tool with real-time collaboration features.",
    },
  ];
  return (
    <Grid container>
      {projectData &&
        projectData.length > 0 &&
        projectData.map((data) => {
          return (
            <Grid item md={6} px={2} mb={4}>
              <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
                <img
                  style={{ marginTop: 7 }}
                  width={"6%"}
                  src={Arrow}
                  alt="arrow"
                />
                <Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      fontSize={"var(--font-12)"}
                      color={"var(--color-white)"}
                    >
                      project Name is:
                    </Typography>
                    <Typography
                      fontSize={"var(--font-24)"}
                      color={"var(--color-white)"}
                      fontWeight={"var(--font-weight-600)"}
                    >
                      {data.projectName}
                    </Typography>
                  </Stack>
                  <hr
                    style={{
                      margin: "8px 0 10px 0",
                      width: "12%",
                      border: "2px solid var(--color-primary)",
                      borderRadius: "50px",
                    }}
                  />
                  <Typography
                    pb={1}
                    mt={2}
                    fontSize={"var(--font-20)"}
                    color={"var(--color-white)"}
                  >
                    Skills are : {data.skills}
                  </Typography>
                  <Typography color={"var(--color-white)"}>
                    {data.content}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default MyProjects;
