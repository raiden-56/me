import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import "./tabs.css";

function GenericTabs({ tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt={6} sx={{ width: "100%" }}>
      <Tabs
        className="tab-btn"
        value={value}
        onChange={handleChange}
        indicatorColor="none"
        textColor="black"
        centered
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{ borderBottom: "none", marginBottom: "30px" }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            px={5}
            sx={{
              fontWeight: value === index ? 600 : 400,
              marginRight: "20px",
              borderRadius: "4px",
              border: value === index && "none",
              padding: "10px 60px",
              backgroundColor: value === index ? "#8750F7" : "#141C27",
              color: "#fff",
              "&:hover": {
                color: "#fff",
              },
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ py: 3 }}>
        {tabs.map((tab, index) => (
          <div className="tabss" key={index} hidden={value !== index}>
            {value === index && tab.content}
          </div>
        ))}
      </Box>
    </Box>
  );
}

GenericTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default GenericTabs;
