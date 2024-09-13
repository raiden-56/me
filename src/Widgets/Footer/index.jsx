import { Stack, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Stack px={4} py={4} sx={{ backgroundColor: "var(--color-dark-blue)" }}>
        <Typography color={"var(--color-light-grey)"}>
          © Ganesh 2024 | All Rights Reserved
        </Typography>
      </Stack>
    </>
  );
}

export default Footer;
