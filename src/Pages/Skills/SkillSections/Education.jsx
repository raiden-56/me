import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Arrow from "../../../assets/icons/arrow.svg";

function Education() {
  return (
    <>
      <Grid container>
        <Grid item md={6} px={2}>
          <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
            <img width={"6%"} src={Arrow} alt="arrow" />
            <Stack>
              <Typography color={"var(--color-white)"}>MCA</Typography>
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
                Jain Univeristy
              </Typography>
              <Typography
                pb={1}
                fontSize={"var(--font-20)"}
                color={"var(--color-white)"}
              >
                2024-present
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
              <Typography color={"var(--color-white)"}>BSc</Typography>
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
                Govt Arts & Science College
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
                2<sup>nd</sup> PUC
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
                Amar Jyothi Composite PU College
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
        <Grid item md={6} mt={6} px={2}>
          <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
            <img width={"6%"} src={Arrow} alt="arrow" />
            <Stack>
              <Typography color={"var(--color-white)"}>SSLC</Typography>
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
                Hindu High School
              </Typography>
              <Typography
                pb={1}
                fontSize={"var(--font-20)"}
                color={"var(--color-white)"}
              >
                2015
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

export default Education;
