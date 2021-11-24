import React from "react";
import { Typography } from "@mui/material";
export function FormError(props) {
  return (
    <Typography variant="body" style={{ color: "red", marginLeft: 12 }}>
      {props.value}
    </Typography>
  );
}
