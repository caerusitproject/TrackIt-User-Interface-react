import React from "react";
import { Avatar, Tabs, Tab } from "@mui/material";

export default function AssociateProject() {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Common styles for the rows
  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    padding: "4px 0",
    fontSize: "13px",
    borderBottom: "1px solid transparent", // keeps spacing consistent
  };

  const labelStyle = {
    color: "#333",
  };

  const valueStyle = {
    color: "#555",
    textAlign: "right",
  };

  return (
    <div
      style={{
        width: "300px",
        borderLeft: "1px solid #ddd",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Associate Project */}
      <h4 style={{ marginBottom: "8px", cursor: "pointer", fontSize: "14px" }}>
        + Associate Project
      </h4>
      <hr />

      {/* Tags Section */}
      <div>
        <h5 style={{ fontSize: "14px", margin: "8px 0" }}>Tags</h5>
        <p style={{ fontSize: "12px", color: "#777" }}>No tags added</p>
      </div>

      {/* Avatar */}
      <Avatar
        alt="User"
        src=""
        sx={{
          width: 50,
          height: 50,
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
        sx={{
          minHeight: "32px",
          "& .MuiTab-root": { fontSize: "12px", padding: "0 8px" },
        }}
      >
        <Tab label="Requests (1)" />
        <Tab label="Assets" />
      </Tabs>

      {/* Content */}
      <div style={{ marginTop: "10px" }}>
        {activeTab === 0 && (
          <div>
            <div style={rowStyle}>
              <span style={labelStyle}>Employee ID</span>
              <span style={valueStyle}>-</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Department Name</span>
              <span style={valueStyle}>-</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Phone</span>
              <span style={valueStyle}>-</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Business Impact</span>
              <span style={valueStyle}>.</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Job title</span>
              <span style={valueStyle}>-</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Reporting To</span>
              <span style={valueStyle}>-</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Mobile</span>
              <span style={valueStyle}>-</span>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <p style={{ color: "#777", textAlign: "center", fontSize: "13px" }}>
            No assets assigned
          </p>
        )}
      </div>
    </div>
  );
}
