import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  TextField,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [showInput, setShowInput] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [pendingRoute, setPendingRoute] = React.useState(null); // new

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    setPendingRoute(path);
    handleClose();
  };

  // 🔁 Watch for menu close, then navigate
  React.useEffect(() => {
    if (!anchorEl && pendingRoute) {
      navigate(pendingRoute);
      setPendingRoute(null);
    }
  }, [anchorEl, pendingRoute, navigate]);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#D95D2E" }} // orange
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Menu Links */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {["home", "request", "solution", "asset", "report"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </Box>

        {/* Right side icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Expanding Search Field */}
          <Box
            sx={{
              width: showInput ? 200 : 0,
              opacity: showInput ? 1 : 0,
              overflow: "hidden",
              transition: "width 0.3s ease, opacity 0.3s ease",
            }}
          >
            <TextField
              size="small"
              autoFocus={showInput}
              placeholder="Search..."
              variant="outlined"
              fullWidth
              sx={{ background: "white", borderRadius: 1 }}
            />
          </Box>

          <Tooltip title="Search">
            <IconButton
              onClick={() => setShowInput((prev) => !prev)}
              sx={{
                color: "white",
                transition: "transform 0.2s ease",
                "&:active": { transform: "scale(0.85)" },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton sx={{ color: "white" }}>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Settings">
            <IconButton sx={{ color: "white" }}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>

          {/* Account Menu */}
          <Tooltip title="Account">
            <IconButton onClick={handleMenu} sx={{ color: "white" }}>
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={() => handleNavigate("/account-details")}>
              My account
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("/")}>Log Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
