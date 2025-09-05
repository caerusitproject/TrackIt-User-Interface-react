import React, { useState } from "react";
import "./sidebar.css";
import {
  ProSidebar,
  Sidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FlagIcon from "@mui/icons-material/Flag";
import {useSelector} from "react-redux";
import { Tooltip } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export default function SideNavbar() {
  const collapsed =useSelector((state)=>state.login.collapsed)
  const location = useLocation();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      <ProSidebar 
       collapsed={collapsed} 
       >
        {/* Header */}
        <SidebarHeader style={{ padding: "5px", textAlign: "center" }}>
        </SidebarHeader>

        {/* Sidebar Content */}
        <SidebarContent>
          <Menu
          active={location.pathname === "/home" }
          > 
             <MenuItem
              icon={<HomeFilledIcon />}
              active={location.pathname === "/home"}
              // component={<NavLink to="/request" />}
            >
               <NavLink to="/home" />
              Home
            </MenuItem>
            <MenuItem
              icon={<ConfirmationNumberIcon />}
              active={location.pathname === "/request"}
              // component={<NavLink to="/request" />}
            >
               <NavLink to="/request" />
              Request
            </MenuItem>

            <MenuItem
              icon={<EmojiObjectsIcon />}
              active={location.pathname === "/solution"}
              // component={<NavLink to="/solution" />}
            >
              <NavLink to="/solution" />
              Solution
            </MenuItem>

            <MenuItem
              icon={<AttachMoneyIcon />}
              active={location.pathname === "/asset"}
              // component={<NavLink to="/asset" />}
            >
              <NavLink to="/asset" />
              Asset
            </MenuItem>

            <MenuItem
              icon={<FlagIcon />}
              active={location.pathname === "/report"}
              // component={<NavLink to="/report" />}
            >
              <NavLink to="/report" />
              Report
            </MenuItem>
          </Menu>
          
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter style={{ textAlign: "center", padding: "10px" }}>
          <div style={{ color: "#aaa", fontSize: "14px" }}>
            © 2025 My App
          </div>
        </SidebarFooter>
      </ProSidebar>
    
    </div>
  );
}
