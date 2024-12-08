import { Stack, Typography } from "@mui/material";
import React from "react";

function Footer() {
  const getCurrentYear = new Date().getFullYear();
  return (
    <>
      <Stack px={4} py={4} sx={{ backgroundColor: "var(--color-dark-blue)" }}>
        <Typography color={"var(--color-light-grey)"}>
          © Ganesh {getCurrentYear} | All Rights Reserved
        </Typography>
      </Stack>
    </>
  );
}

export default Footer;
