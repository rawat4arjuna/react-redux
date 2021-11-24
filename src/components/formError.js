import React from "react";
import { Typography } from "@mui/material";
export  function FormError(props) {
  return (
    <Typography variant="body" style={{ color: "red" }}>
      {props.value}
    </Typography>
  );
}
