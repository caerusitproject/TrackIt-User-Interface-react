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
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FlagIcon from "@mui/icons-material/Flag";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showInput, setShowInput] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pendingRoute, setPendingRoute] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [highlightStyle, setHighlightStyle] = useState({});
  const navRefs = useRef({});

  // Nav items with proper icons
  const navItems = [
    { text: "home", icon: <HomeFilledIcon /> },
    { text: "request", icon: <ConfirmationNumberIcon /> },
    { text: "solution", icon: <EmojiObjectsIcon /> },
    { text: "asset", icon: <AttachMoneyIcon /> },
    { text: "report", icon: <FlagIcon /> },
  ];

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleNavigate = (path) => {
    setPendingRoute(path);
    handleClose();
  };

  // navigate after closing
  useEffect(() => {
    if (!anchorEl && pendingRoute) {
      navigate(pendingRoute);
      setPendingRoute(null);
    }
  }, [anchorEl, pendingRoute, navigate]);

  // highlight effect
    useEffect(() => {
      const updateHighlight = () => {
        const activePath = location.pathname;
        const activeItem = navItems.find(
          (item) => `/${item.text}` === activePath
        );
        if (!activeItem) return;

        const el = navRefs.current[activeItem.text];
        if (el) {
          setHighlightStyle({
            left: el.offsetLeft,
            width: el.offsetWidth,
          });
        }
      };

      const id = requestAnimationFrame(updateHighlight);
      return () => cancelAnimationFrame(id);
    }, [location.pathname, navItems]);


  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#D95D2E" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Hamburger for mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Nav */}
          <Box
            sx={{
              position: "relative",
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                background: "white",
                borderRadius: "10px",
                padding: "5px",
                height: "27px",
                transition: "all 0.3s ease",
                ...highlightStyle,
              }}
            />
            {navItems.map((item) => {
              const path = `/${item.text}`;
              const isActive = location.pathname.startsWith(path);
              return (
                <NavLink
                  key={item.text}
                  to={path}
                  ref={(el) => (navRefs.current[item.text] = el)}
                  style={{
                    position: "relative",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    textAlign: "center",
                    color: isActive ? "#D95D2E" : "rgba(255,255,255,0.8)",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    zIndex: 1,
                  }}
                >
                  {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
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
                sx={{ color: "white" }}
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

      {/* Slide Drawer for mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${item.text}`);
                      setDrawerOpen(false);
                    }}
                  >
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"2px"}}>
                      <span>{item.icon}</span>
                      <ListItemText
                        primary={
                          item.text.charAt(0).toUpperCase() +
                          item.text.slice(1)
                        }
                      />
                    </div>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
    </>
  );
}
