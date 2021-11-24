import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function CenterGrid(props) {
  return (
    <Box sx={{ flexGrow: 3 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {props.children}
      </Grid>
    </Box>
  );
}
