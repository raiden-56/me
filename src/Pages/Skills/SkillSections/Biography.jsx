import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function DownloadResume() {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/18OEv518rjcZRdK3eAQKfxvbeK57NgfJK/view?usp=drive_link",
      "_blank"
    );
  };
  return (
    <Stack px={4}>
      <Typography
        fontSize={"var(--font-24)"}
        fontWeight={"var(--font-weight-600)"}
        color={"var(--color-white)"}
      >
        View Resume
      </Typography>
      <Stack display={"inline-block"} mt={2}>
        <Button
          className="btn-btn"
          endIcon={<FileDownloadOutlinedIcon />}
          variant="contained"
          onClick={handleResumeClick}
        >
          Download Cv
        </Button>
      </Stack>
    </Stack>
  );
}

export default DownloadResume;
