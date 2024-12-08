import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { FaArrowUp } from "react-icons/fa";
import "./scrollTop.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          backgroundColor: "transparent",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          border: "none",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <Box className="scroll-btn">
          <FaArrowUp style={{ fill: "#fff" }} />
        </Box>
      </button>
    )
  );
};

export default ScrollToTopButton;
