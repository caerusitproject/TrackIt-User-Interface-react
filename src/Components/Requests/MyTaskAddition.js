import React, { useState } from "react";
import {
  TasksPanel,
  TasksHeader,
  IconGroup,
  TasksToolbar,
  TasksContent,
  EmptyImage,
  EmptyText,
  NewTaskButton,
  TasksFooter,
  PageControls
} from "../../styled_components/mytasks.styled";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton,Paper } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import styled from "styled-components";

const CollapsiblePanel = styled(TasksPanel)`
  transition: width 0.3s ease;
  overflow: hidden;
  transition: transform 0.3s ease;
   &:hover {
    transform: scale(1.01);
  }
  ${({ collapsed }) =>
    collapsed
      ? `
    width: 50px;
    min-width: 50px;
  `
      : `
    width: 100%;
  `}
`;

const CollapseButton = styled(IconButton)`
  margin-right: 8px;
  transition: transform 0.3s ease;
  ${({ collapsed }) => (collapsed ? "transform: rotate(180deg);" : "")}
`;

export default function MyAllTasks() {
  const [collapsed, setCollapsed] = useState(false);

  return (
     <Paper 
      elevation={3} 
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
    <CollapsiblePanel collapsed={collapsed}>
      <TasksHeader>
        {!collapsed && "My All Tasks"}
        <IconGroup>
         
          {!collapsed && (
            <>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <RefreshIcon />
              </IconButton>
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
            </>
          )}
          <CollapseButton
            onClick={() => setCollapsed((prev) => !prev)}
            collapsed={collapsed ? 1 : 0}
          >
            <NavigateBeforeIcon />
          </CollapseButton>
        </IconGroup>
      </TasksHeader>

      {!collapsed && (
        <>
          <TasksToolbar>
            <FormControl
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  top: -5,
                  fontSize: "0.85rem"
                },
                "& .MuiSelect-select": {
                  padding: "8px 12px",
                  minHeight: "40px !important"
                },
                "& .MuiOutlinedInput-root": {
                  height: 40
                }
              }}
            >
              <InputLabel id="demo-simple-select-label">Task</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Task"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </TasksToolbar>

          <TasksContent>
            <EmptyImage
              src="https://img.icons8.com/ios-filled/100/clipboard.png"
              alt="No tasks"
            />
            <EmptyText>There are no tasks in this view</EmptyText>
            <NewTaskButton>
              <AddCircleOutlineIcon /> New Task
            </NewTaskButton>
          </TasksContent>

          <TasksFooter>
            <div>
              <select style={{ width: "58px", height: "28px" }}>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span style={{ marginLeft: "8px" }}>• 0 - 0</span>
            </div>
            <PageControls>
              <button title="Prev">
                <ArrowBackIosIcon />
              </button>
              <button title="Next">
                <ArrowForwardIosIcon />
              </button>
            </PageControls>
          </TasksFooter>
        </>
      )}
    </CollapsiblePanel>
    </Paper>
  );
}
