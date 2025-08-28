import React, { useEffect, useRef, useState } from "react";
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
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showInput, setShowInput] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pendingRoute, setPendingRoute] = useState(null);

  // highlight state
  const [highlightStyle, setHighlightStyle] = useState({});
  const navRefs = useRef({}); // store refs for nav items

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleNavigate = (path) => {
    setPendingRoute(path);
    handleClose();
  };

  useEffect(() => {
    if (!anchorEl && pendingRoute) {
      navigate(pendingRoute);
      setPendingRoute(null);
    }
  }, [anchorEl, pendingRoute, navigate]);

  const navItems = ["home", "request", "solution", "asset", "report"];

  // update highlight on location change
  useEffect(() => {
    const activePath = location.pathname;
    const activeItem = navItems.find((item) => `/${item}` === activePath);
    if (activeItem && navRefs.current[activeItem]) {
      const el = navRefs.current[activeItem];
      setHighlightStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [location.pathname]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#D95D2E" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Menu Links */}
        <Box sx={{ position: "relative", display: "flex", gap: 4 }}>
          {/* highlight div */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              background: "white",
              borderRadius: "10px",
              padding:"5px",
              height:"27px",
              transition: "all 0.3s ease",
              ...highlightStyle,
            }}
          />
          {navItems.map((item) => {
            const path = `/${item}`;
            const isActive = location.pathname === path;
            return (
              <NavLink
                key={item}
                to={path}
                ref={(el) => (navRefs.current[item] = el)}
                style={{
                  position: "relative",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  textAlign:"center",
                  color: isActive ? "#D95D2E" : "rgba(255,255,255,0.8)",
                  fontWeight: isActive ? "bold" : "normal",
                  textDecoration: "none",
                  zIndex: 1, // make sure text is above highlight
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            );
          })}
        </Box>

        {/* Right side icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
