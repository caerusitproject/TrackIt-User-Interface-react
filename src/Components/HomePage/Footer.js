import React from "react";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import WifiChannelIcon from "@mui/icons-material/WifiChannel";
import { IconButton, Paper } from "@mui/material";
import {FooterRow,
FooterItem,
FooterLabel } from "../../styled_components/footer.styled"


export default function Footer() {
  return (
    <Paper
      elevation={6} // 🔥 Material shadow depth (0–24)
      sx={{
        borderRadius: "1.5rem",
        marginTop: 2,
        backgroundColor: "#fff",
      }}
    >
      <FooterRow>
        <FooterItem>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <FooterLabel>Chats</FooterLabel>
        </FooterItem>

        <FooterItem>
          <IconButton>
            <GroupsIcon sx={{ color: "#d94444" }} />
          </IconButton>
          <FooterLabel>Groups</FooterLabel>
        </FooterItem>

        <FooterItem>
          <IconButton>
            <WifiChannelIcon />
          </IconButton>
          <FooterLabel>Channels</FooterLabel>
        </FooterItem>
      </FooterRow>
    </Paper>
  );
}
