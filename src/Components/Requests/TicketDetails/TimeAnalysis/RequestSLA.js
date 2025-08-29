import React from "react";
import { Card, Typography, Divider, LinearProgress, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
import styled from "styled-components";

const GreyBorderCard = styled(Card)`
  border: 1.5px solid #c4c4c4;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const YellowBar = styled.div`
  background: #ffe600;
  height: 10px;
  border-radius: 3px;
  flex: 1;
  border: 1px solid #000;
`;

const GreyWhiteBar = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid #000;
  border-radius: 3px;
  overflow: hidden;
  height: 10px;
  min-width: 120px;
`;

const GreyHalf = styled.div`
  flex: 1;
  background: #eee;
`;

const WhiteHalf = styled.div`
  flex: 1;
  background: #fff;
`;

const SquareYellow = styled.div`
  width: 14px;
  height: 14px;
  background: #ffe600;
  border: 1px solid #000;
  border-radius: 3px;
  margin-right: 8px;
`;

export default function RequestSLA() {
  return (
    <GreyBorderCard>
    <Box display="flex" flexWrap="wrap">
      <Box flex={1} minWidth={160} mb={2}>
        <Typography variant="body2" color="text.secondary">
          Request SLA
        </Typography>
        <Typography fontWeight="bold">No SLA Available</Typography>
        <Typography variant="caption" color="text.secondary">
          Response Time
        </Typography>
      </Box>
      <Box flex={1} minWidth={120} mb={2}>
        <Typography fontWeight="bold">29 hours</Typography>
        <Typography variant="caption" color="text.secondary">
          Resolution Time
        </Typography>
      </Box>
      <Box flex={1} minWidth={140} mb={2}>
        <Typography variant="body2" color="text.secondary">
          Actual Time Spent
        </Typography>
        <Typography fontWeight="bold">56 minutes</Typography>
        <Typography variant="caption" color="text.secondary">
          Group
        </Typography>
      </Box>
      <Box flex={1} minWidth={140} mb={2}>
        <Typography fontWeight="bold">56 minutes</Typography>
        <Typography variant="caption" color="text.secondary">
          Technician
        </Typography>
      </Box>
    </Box>
  </GreyBorderCard>
  )
}
