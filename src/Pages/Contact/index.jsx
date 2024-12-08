import {
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";

function Contact() {
  return (
    <>
      <Stack id="contact" container px={4} mt={8} direction={"column"}>
        <Typography className="title">Contact us</Typography>
        <Grid item md={10} sm={12}>
          <Typography className="main-title">
            Elevate your brand to new heights with our portfolio expertise
          </Typography>
        </Grid>
      </Stack>
      <Grid container px={4} mt={5}>
        <Grid item xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} p={2}>
          <Stack
            display={"flex"}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            py={7}
            sx={{
              backgroundColor: "var(--color-dark-blue)",
              borderRadius: "8px",
            }}
          >
            <AddLocationAltOutlinedIcon
              sx={{ fontSize: 40, fill: "var(--color-white)" }}
            />
            <Typography
              fontSize={"var(--font-24)"}
              fontWeight={600}
              pt={2}
              color={"var(--color-white)"}
            >
              Location
            </Typography>
            <Typography px={6} py={2} color={"var(--color-white)"}>
              Jp Nagar, Bangalore, 560078
            </Typography>
            <Typography color={"var(--color-white)"}>View on Map</Typography>
          </Stack>
        </Grid>
        <Grid item xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} p={2}>
          <Stack
            display={"flex"}
            textAlign={"center"}
            alignItems={"center"}
            py={7}
            sx={{
              backgroundColor: "var(--color-dark-blue)",
              borderRadius: "8px",
            }}
          >
            <AddIcCallIcon sx={{ fontSize: 40, fill: "var(--color-white)" }} />
            <Typography
              fontSize={"var(--font-24)"}
              fontWeight={600}
              pt={2}
              color={"var(--color-white)"}
            >
              Phone
            </Typography>
            <Typography px={6} py={2} color={"var(--color-white)"}>
              +91 9110428294
            </Typography>
            <Typography color={"var(--color-white)"}>View on Map</Typography>
          </Stack>
        </Grid>
        <Grid item xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} p={2}>
          <Stack
            display={"flex"}
            textAlign={"center"}
            py={7}
            alignItems={"center"}
            sx={{
              backgroundColor: "var(--color-dark-blue)",
              borderRadius: "8px",
            }}
          >
            <ForwardToInboxOutlinedIcon
              sx={{ fontSize: 40, fill: "var(--color-white)" }}
            />
            <Typography
              fontSize={"var(--font-24)"}
              fontWeight={600}
              pt={2}
              color={"var(--color-white)"}
            >
              Mail Box
            </Typography>
            <Typography px={6} py={2} color={"var(--color-white)"}>
              ganeshmesta1234@gmail.com
            </Typography>
            <Typography color={"var(--color-white)"}>View on Map</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container px={4}>
        <Grid item md={6} sm={12} xs={12} px={2} mt={4}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Enter Full Name"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "var(--color-light-grey)",
                "& fieldset": {
                  borderColor: "var(--color-light-grey)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--color-light-grey)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--color-light-grey)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "var(--color-light-grey)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "var(--color-light-grey)",
              },
            }}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} px={2} mt={4}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Enter Phone Number"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "var(--color-light-grey)",
                "& fieldset": {
                  borderColor: "var(--color-light-grey)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--color-light-grey)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--color-light-grey)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "var(--color-light-grey)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "var(--color-light-grey)",
              },
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} px={2} mt={4}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Enter Phone Number"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "var(--color-light-grey)",
                "& fieldset": {
                  borderColor: "var(--color-light-grey)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--color-light-grey)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--color-light-grey)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "var(--color-light-grey)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "var(--color-light-grey)",
              },
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} px={2} mt={4}>
          <FormControl fullWidth>
            <TextField
              fullWidth
              placeholder="Job Summary"
              multiline
              id="jobSummery"
              rows={3}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "var(--color-light-grey)",
                  "& fieldset": {
                    borderColor: "var(--color-light-grey)",
                  },
                  "&:hover fieldset": {
                    borderColor: "var(--color-light-grey)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--color-light-grey)",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "var(--color-light-grey)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "var(--color-light-grey)",
                },
              }}
              inputProps={{
                "data-testid": "jobSummery",
              }}
            />
          </FormControl>
        </Grid>
        <Button
          endIcon={<SendIcon />}
          px={5}
          className="btn-btn"
          variant="contained"
          sx={{ marginLeft: "15px", marginTop: "40px", marginBottom: "30px" }}
        >
          Submit
        </Button>
      </Grid>
    </>
  );
}

export default Contact;
