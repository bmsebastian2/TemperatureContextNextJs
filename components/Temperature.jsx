import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

export default function DiscreteSliderMarks({ temp, setTemp }) {
  function valuetext(value) {
    setTemp(value);
    return `${value}°C`;
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={temp}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
