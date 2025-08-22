// TicketPropertiesDialog.jsx
import React, { useState } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import SideBarPanelAssoProjects from './SideBarPanelAssoProjects';

// Styled Components
const Container = styled.div`
  background: #f8f9fa;
  padding: 16px;
`;

const MainPanel = styled.div`
  border: 1.5px solid #dadada;
  border-radius: 6px;
  background: #fff;
  display: flex;
  min-height: 440px;
  margin-top: 16px;
  overflow: hidden;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const PanelProps = styled.div`
  flex: 2;
  border-right: 1.5px solid #dadada;
  padding: 18px;
  overflow-y: auto;

  @media (max-width: 991px) {
    border-right: none;
    border-bottom: 1.5px solid #dadada;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

const PanelSide = styled.div`
  flex: 1;
  padding: 18px 23px;
  min-width: 240px;
  background: #fff;

  @media (max-width: 991px) {
    min-width: 0;
  }
`;

const PropsHeader = styled.span`
  font-weight: 600;
  font-size: 1.03rem;
  color: #222;
  margin-right: 12px;
`;

const EditLink = styled.span`
  color: #f06c35;
  font-size: 0.97rem;
  cursor: pointer;
`;

export default function TicketPropertiesDialog() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    category: "Software",
    priority: "Normal",
    subcategory: "Oracle",
    status: "Open",
    item: "Not Assigned",
    mode: "Email",
    impact: "Single User",
    group: "Application Support",
    site: "-",
    technician: "-",
    emailNotify: "-",
    urgency: "2 Business Days",
    requestType: "Incident",
    serviceCategory: "Default Templates",
    assets: "-",
    createdBy: "System",
    department: "-",
    sla: "SEV-2",
    template: "Default Request",
    createdDate: "Jul 1, 2025 03:10 PM",
    startTime: "-",
    endTime: "-",
    dueDate: "Jul 3, 2025 03:10 PM",
    responseTime: "-",
    lastUpdate: "Jul 1, 2025 04:10 PM",
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      {/* Top Bar */}
      <AppBar sx={{ position: "relative", backgroundColor: "#f06c35" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
            Ticket Properties
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Save
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container>
        <MainPanel>
          {/* Left: Form */}
          <PanelProps>
            <div style={{ marginBottom: "16px" }}>
              <PropsHeader>Properties</PropsHeader>
              <EditLink>Edit</EditLink>
            </div>

            <form>
              <FormGrid>
                {/* Category */}
                <FormControl size="small" fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={formData.category}
                    label="Category"
                    onChange={handleChange("category")}
                  >
                    <MenuItem value="Software">Software</MenuItem>
                    <MenuItem value="Hardware">Hardware</MenuItem>
                    <MenuItem value="Network">Network</MenuItem>
                  </Select>
                </FormControl>

                {/* Priority */}
                <FormControl size="small" fullWidth>
                  <InputLabel>Priority</InputLabel>
                  <Select
                    value={formData.priority}
                    label="Priority"
                    onChange={handleChange("priority")}
                  >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Normal">Normal</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </Select>
                </FormControl>

                {/* Subcategory */}
                <TextField
                  label="Subcategory"
                  value={formData.subcategory}
                  onChange={handleChange("subcategory")}
                  size="small"
                  fullWidth
                />

                {/* Status */}
                <FormControl size="small" fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={formData.status}
                    label="Status"
                    onChange={handleChange("status")}
                  >
                    <MenuItem value="Open">Open</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Closed">Closed</MenuItem>
                  </Select>
                </FormControl>

                {/* Group */}
                <FormControl size="small" fullWidth>
                  <InputLabel>Group</InputLabel>
                  <Select
                    value={formData.group}
                    label="Group"
                    onChange={handleChange("group")}
                  >
                    <MenuItem value="Application Support">
                      Application Support
                    </MenuItem>
                    <MenuItem value="IT Helpdesk">IT Helpdesk</MenuItem>
                    <MenuItem value="Network Team">Network Team</MenuItem>
                  </Select>
                </FormControl>

                {/* Remaining fields */}
                <TextField
                  label="Mode"
                  value={formData.mode}
                  onChange={handleChange("mode")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Impact"
                  value={formData.impact}
                  onChange={handleChange("impact")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Site"
                  value={formData.site}
                  onChange={handleChange("site")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Technician"
                  value={formData.technician}
                  onChange={handleChange("technician")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Email IDs to Notify"
                  value={formData.emailNotify}
                  onChange={handleChange("emailNotify")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Urgency"
                  value={formData.urgency}
                  onChange={handleChange("urgency")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Request Type"
                  value={formData.requestType}
                  onChange={handleChange("requestType")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Service Category"
                  value={formData.serviceCategory}
                  onChange={handleChange("serviceCategory")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Asset(s)"
                  value={formData.assets}
                  onChange={handleChange("assets")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Created By"
                  value={formData.createdBy}
                  onChange={handleChange("createdBy")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Department"
                  value={formData.department}
                  onChange={handleChange("department")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="SLA"
                  value={formData.sla}
                  onChange={handleChange("sla")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Template"
                  value={formData.template}
                  onChange={handleChange("template")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Created Date"
                  value={formData.createdDate}
                  onChange={handleChange("createdDate")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Scheduled Start Time"
                  value={formData.startTime}
                  onChange={handleChange("startTime")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Scheduled End Time"
                  value={formData.endTime}
                  onChange={handleChange("endTime")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Due By Date"
                  value={formData.dueDate}
                  onChange={handleChange("dueDate")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Response Due By Time"
                  value={formData.responseTime}
                  onChange={handleChange("responseTime")}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Last Update Time"
                  value={formData.lastUpdate}
                  onChange={handleChange("lastUpdate")}
                  size="small"
                  fullWidth
                />
              </FormGrid>
            </form>
          </PanelProps>

          {/* Right: Sidebar */}
          <SideBarPanelAssoProjects/>
          {/* <PanelSide>
            <div style={{ fontWeight: "bold", marginBottom: "20px" }}>
              + Associate Project
            </div>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontWeight: "bold" }}>Tags</span>
              <div style={{ color: "#787878" }}>No tags added</div>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="User"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1.5px solid #ccc",
                objectFit: "cover",
              }}
            />
          </PanelSide> */}
        </MainPanel>
      </Container>
    </Dialog>
  );
}
