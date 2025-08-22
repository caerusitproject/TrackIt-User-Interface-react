import React from "react";
import {
  Paper,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AccountDisplayPage() {
  // Dummy user details (replace with props or redux state later)
  const user = {
    firstName: "Debanjan",
    lastName: "Sinha",
    email: "debanjan@example.com",
  };

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          width: 440,
          borderRadius: 3,
          boxShadow: 6,
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          {/* Avatar with Account Icon */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Avatar sx={{ bgcolor: "primary.main", width: 72, height: 72 }}>
              <AccountCircleIcon sx={{ fontSize: 42 }} />
            </Avatar>
          </Box>

          <Typography variant="h5" gutterBottom>
            Account Details
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* User Info */}
          <Box sx={{ textAlign: "left", px: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              First Name:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.firstName}
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Last Name:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.lastName}
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Email:
            </Typography>
            <Typography variant="body1">{user.email}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}
