import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaperCustom = styled(Paper)(({ theme }) => ({
  display: "inline-flex",
  width: "300px",
  padding: 20,
  margin: "auto",
}));
