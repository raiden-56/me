import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import LocationImg from "../../assets/icons/location.svg";
import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/inbox.svg";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  return (
    <>
      <Stack container px={4} mt={8} direction={"column"}>
        <Typography className="title">Contact us</Typography>
        <Grid item md={10} sm={12}>
          <Typography className="main-title">
            Elevate your brand to new heights with our portfolio expertise
          </Typography>
        </Grid>
      </Stack>
      <Grid container px={4} my={5} gap={3}>
        <Grid item md={3.5}>
          <Stack
            display={"flex"}
            textAlign={"center"}
            py={7}
            sx={{
              backgroundColor: "var(--color-dark-blue)",
              borderRadius: "8px",
            }}
          >
            <img
              style={{ width: "20%", margin: "0 auto" }}
              src={LocationImg}
              alt="location"
            />
            <Typography
              fontSize={"var(--font-24)"}
              fontWeight={600}
              pt={1}
              color={"var(--color-white)"}
            >
              Location
            </Typography>
            <Typography px={6} py={2} color={"var(--color-white)"}>
              New K.H.B Colony, Habbuwada, Karwar, India 581301
            </Typography>
            <Typography color={"var(--color-white)"}>View on Map</Typography>
          </Stack>
        </Grid>
        <Grid item md={3.5}>
          <Stack
            display={"flex"}
            textAlign={"center"}
            py={7}
            sx={{
              backgroundColor: "var(--color-dark-blue)",
              borderRadius: "8px",
            }}
          >
            <img
              style={{ width: "20%", margin: "0 auto" }}
              src={Phone}
              alt="phone"
            />
            <Typography
              fontSize={"var(--font-24)"}
              fontWeight={600}
              pt={1}
              color={"var(--color-white)"}
            >
              Phone
            </Typography>
            <Typography px={6} py={2} color={"var(--color-white)"}>
              New K.H.B Colony, Habbuwada, Karwar, India 581301
            </Typography>
            <Typography color={"var(--color-white)"}>View on Map</Typography>
          </Stack>
        </Grid>
        <Grid item md={3.5}>
          <Stack
            display={"flex"}
            textAlign={"center"}
            py={7}
            sx={{
              backgroundColor: "var(--color-dark-blue)",
              borderRadius: "8px",
            }}
          >
            <img
              style={{ width: "20%", margin: "0 auto" }}
              src={Email}
              alt="email"
            />
            <Typography
              fontSize={"var(--font-24)"}
              fontWeight={600}
              pt={1}
              color={"var(--color-white)"}
            >
              Mail Box
            </Typography>
            <Typography px={6} py={2} color={"var(--color-white)"}>
              New K.H.B Colony, Habbuwada, Karwar, India 581301
            </Typography>
            <Typography color={"var(--color-white)"}>View on Map</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container px={4} my={5}>
        <Grid item md={6} pr={2}>
          <input
            placeholder="Enter a Name"
            className="text-field"
            type="text"
            name=""
            id=""
          />
        </Grid>
        <Grid item md={6}>
          <input
            placeholder="Enter a Subject"
            className="text-field"
            type="text"
            name=""
            id=""
          />
        </Grid>
        <Grid item md={12} mt={3}>
          <input
            placeholder="Enter a Email"
            className="text-field"
            type="email"
            name=""
            id=""
          />
        </Grid>
        <Grid item md={12} my={3}>
          <textarea
            className="text-area-field"
            placeholder="Enter a Message"
            name=""
            id=""
            cols="30"
            rows="6"
          ></textarea>
        </Grid>
        <Button
          endIcon={<SendIcon />}
          px={5}
          className="btn-btn"
          variant="contained"
        >
          Submit
        </Button>
      </Grid>
    </>
  );
}

export default Contact;
