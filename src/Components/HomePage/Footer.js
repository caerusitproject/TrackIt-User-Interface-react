import React from "react";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import WifiChannelIcon from "@mui/icons-material/WifiChannel";
import { IconButton, Paper } from "@mui/material";

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 28px;
  gap: 38px;

  @media (max-width: 600px) {
    gap: 16px;
    padding: 12px 16px;
  }
`;

const FooterItem = styled.div`
  color: #555;
  text-align: center;
  font-size: 0.98rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: #1976d2; /* MUI Primary Blue */
    transform: scale(1.1);
  }

  svg {
    font-size: 1.8rem;
    transition: all 0.25s ease-in-out;
  }

  &:hover svg {
    color: #1976d2;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const FooterLabel = styled.span`
  margin-top: 2px;
`;

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
