// import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const ColorButton = styled(Button)(({ theme }) => ({
  color: "rgba(252, 252, 252, 1)",
  backgroundColor: "#d1572aff",
  '&:hover': {
    backgroundColor: "#8b3f23ff",
  },
}));

export const ColorButtonCancel = styled(Button)(({ theme }) => ({
  color: "rgba(252, 252, 252, 1)",
  backgroundColor: "#5f4e48ff",
  '&:hover': {
    backgroundColor: "#4e4e4eff",
  },
}));

export const DialogueTheme = styled(Dialog)(({ theme }) => ({
  "& .MuiModal-backdrop": {
    borderRadius: "16px",
    backgroundColor: "rgba(128, 151, 185, 0.5)",
    backdropFilter: "blur(4px)",
    // padding: theme.spacing(2),
  },
}));