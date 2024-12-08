import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Arrow from "../../../assets/icons/arrow.svg";

function Experience() {
  return (
    <>
      <Grid container>
        <Grid item md={6} px={2}>
          <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
            <img width={"6%"} src={Arrow} alt="arrow" />
            <Stack>
              <Typography color={"var(--color-white)"}>
                Software Enginner
              </Typography>
              <hr
                style={{
                  margin: "8px 0 10px 0",
                  width: "12%",
                  border: "2px solid var(--color-primary)",
                  borderRadius: "50px",
                }}
              />
              <Typography
                fontSize={"var(--font-24)"}
                py={2}
                color={"var(--color-white)"}
                fontWeight={"var(--font-weight-600)"}
              >
                NSP
              </Typography>
              <Typography
                pb={1}
                fontSize={"var(--font-20)"}
                color={"var(--color-white)"}
              >
                2024-2026
              </Typography>
              <Typography color={"var(--color-white)"}>
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for details.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6} px={2}>
          <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
            <img width={"6%"} src={Arrow} alt="arrow" />
            <Stack>
              <Typography color={"var(--color-white)"}>
                Associate Software Engineer
              </Typography>
              <hr
                style={{
                  margin: "8px 0 10px 0",
                  width: "12%",
                  border: "2px solid var(--color-primary)",
                  borderRadius: "50px",
                }}
              />
              <Typography
                fontSize={"var(--font-24)"}
                py={2}
                color={"var(--color-white)"}
                fontWeight={"var(--font-weight-600)"}
              >
                NSP
              </Typography>
              <Typography
                pb={1}
                fontSize={"var(--font-20)"}
                color={"var(--color-white)"}
              >
                2017-2018
              </Typography>
              <Typography color={"var(--color-white)"}>
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for detail.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6} mt={6} px={2}>
          <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
            <img width={"6%"} src={Arrow} alt="arrow" />
            <Stack>
              <Typography color={"var(--color-white)"}>
                UI / UX Designer
              </Typography>
              <hr
                style={{
                  margin: "8px 0 10px 0",
                  width: "12%",
                  border: "2px solid var(--color-primary)",
                  borderRadius: "50px",
                }}
              />
              <Typography
                fontSize={"var(--font-24)"}
                py={2}
                color={"var(--color-white)"}
                fontWeight={"var(--font-weight-600)"}
              >
                Narayan Solution
              </Typography>
              <Typography
                pb={1}
                fontSize={"var(--font-20)"}
                color={"var(--color-white)"}
              >
                2015-2017
              </Typography>
              <Typography color={"var(--color-white)"}>
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for detail.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Experience;
