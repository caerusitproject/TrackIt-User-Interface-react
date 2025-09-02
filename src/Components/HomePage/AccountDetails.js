import React from "react";
import { Box, Avatar, Typography, Divider, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GoogleIcon from "@mui/icons-material/Google";

// Styled wrapper
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f9f9f9;
  font-family: "Inter", sans-serif;
`;

// Sidebar
const Sidebar = styled.div`
  width: 240px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 0 24px;
  margin-bottom: 24px;
`;

const SidebarList = styled(List)`
  && {
    padding: 0;
  }
`;

const SidebarItem = styled(ListItem)`
  && {
    padding: 12px 24px;
    cursor: pointer;
    &:hover {
      background: #f3f4f6;
    }
    &.active {
      background: #f3f4f6;
      font-weight: 600;
    }
  }
`;

// Main content
const MainContent = styled.div`
  flex: 1;
  background: #fff;
  margin: 16px;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const Label = styled(Typography)`
  && {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 4px;
  }
`;

const Value = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: 500;
    color: #111827;
  }
`;

const AddLink = styled(Button)`
  && {
    margin-top: 4px;
    font-size: 14px;
    text-transform: none;
  }
`;

export default function AccountSettings() {
  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>Account</SidebarHeader>
        <SidebarList>
          <SidebarItem className="active">
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </SidebarItem>
          {/* <SidebarItem>
            <ListItemIcon>
              <SecurityIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Security" />
          </SidebarItem> */}
          {/* <SidebarItem>
            <ListItemIcon>
              <CreditCardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Billing" />
          </SidebarItem> */}
        </SidebarList>
      </Sidebar>

      {/* Main content */}
      <MainContent>
        <Typography variant="h6" gutterBottom>
          Profile details
        </Typography>

        {/* Profile section */}
        <Section>
          <Label>Profile</Label>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar src="/avatar.png" />
              <Value>Cameron Walker</Value>
            </Box>
            <Button variant="text">Update profile</Button>
          </Box>
        </Section>

        <Divider />

        {/* Email */}
        <Section>
          <Label>Email addresses</Label>
          <Value>example@personal.com</Value>
          <AddLink variant="text">+ Add email address</AddLink>
        </Section>

        <Divider />

        {/* Phone */}
        <Section>
          <Label>Phone number</Label>
          <Value>+1 (555) 123-4567</Value>
          <AddLink variant="text">+ Add phone number</AddLink>
        </Section>

        <Divider />

        {/* Connected accounts */}
        <Section>
          <Label>Connected accounts</Label>
          <Box display="flex" alignItems="center" gap={1}>
            <GoogleIcon color="error" fontSize="small" />
            <Value>example@gmail.com</Value>
          </Box>
          <AddLink variant="text">+ Connect account</AddLink>
        </Section>
      </MainContent>
    </Container>
  );
}
