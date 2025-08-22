import React, { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, Box, Card, CardContent, Typography } from "@mui/material";
import { Button, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";
import {
Container,
TicketRow,
LeftColumn,
RightColumn,
ActionBar,
StatusDot,
rowStyle,
labelStyle,
valueStyle
} from "../../../styled_components/requestTicketDetails"
import TextEditor from "./TextEditor"
import TicketResolution from "./Resolution";

export default function TicketLeft() {
  const [tab, setTab] = useState(0);
  const {id} = useParams();

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  console.log('Ticket ID____',id)

  return (
    <LeftColumn>
      <Tabs
        value={tab}
        onChange={handleChange}
        variant="scrollable"
        textColor="primary"
        indicatorColor="primary"
        sx={{ marginBottom: 2 }}
      >
        <Tab label="Details" />
        <Tab label="Resolution" />
        <Tab label="Milestone" />
        <Tab label="Time Analysis" />
        <Tab label="History" />
      </Tabs>
      {tab === 0 
       && 
      //  details Card to be shown
       <div>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1">
            <strong style={{ color: "#f06c35" }}>#84581</strong> Oracle Access{" "}
            <span style={{ color: "red", fontSize: "0.85rem" }}>by Customer</span>{" "}
            <span style={{ fontSize: "0.85rem", color: "#6c757d", marginLeft: 8 }}>
              on Jul 1, 2023 03:10 PM
            </span>
            <span style={{ fontSize: "0.85rem", color: "#6c757d", marginLeft: 8 }}>
              Due By: Jul 3, 2025 03:10 PM
            </span>
          </Typography>
        </Box>

        <Card sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Description
            </Typography>
            <Typography variant="body2">
              <p><strong>To : XYZ,</strong></p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Thank You,</p>
            </Typography>
          </CardContent>
        </Card>

        <Typography
          variant="body2"
          sx={{ color: "#0d6efd", cursor: "pointer" }}
        >
          <i className="bi bi-paperclip"></i> Browse Files or Drag files here | Max size: 50 MB.
        </Typography>
       </div>
      }

      {tab === 1 &&
        // Resolution part to be rendered here 
      <>
        <TicketResolution/>
        <TextEditor/>
      </>
      }

      {tab === 2 &&
       // MileStone part to be rendered here 
        <>
          <div>
            MileStone component will be rendered here.
          </div>
        </>
      }

      {tab === 3 &&
       //  Time Analysis part to be rendered here 
        <>
          <div>
            Time Analysis component will be rendered here.
          </div>
        </>
      }

      {tab === 4 &&
        //  History part to be rendered here 
        <>
          <div>
            History component will be rendered here.
          </div>
        </>
      }

      
    </LeftColumn>
  );
}
