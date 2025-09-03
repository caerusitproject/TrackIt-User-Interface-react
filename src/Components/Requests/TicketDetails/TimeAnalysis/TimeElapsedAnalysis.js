import React from "react";
import { Card, Typography, Divider, LinearProgress, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
import styled from "styled-components";

// ---------- Styled Components ----------
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

export const TimeElapsedAnalysis = () => (
  <GreyBorderCard>
    <Typography fontWeight="bold" gutterBottom>
      Time Elapsed Analysis - Status, Group and Technicians
    </Typography>

    {/* Status */}
    <Box display="flex" alignItems="center" mb={3}>
      <Typography sx={{ width: 60 }} color="text.secondary">
        Status
      </Typography>
      <YellowBar />
      <Box display="flex" alignItems="center" ml={2}>
        <SquareYellow />
        <Typography variant="caption" color="text.secondary">
          Open
        </Typography>
      </Box>
    </Box>

    {/* Group */}
    <Box display="flex" alignItems="center" maxWidth={400}>
      <Typography sx={{ width: 60 }} color="text.secondary">
        Group
      </Typography>
      <GreyWhiteBar>
        <GreyHalf />
        <WhiteHalf />
      </GreyWhiteBar>
    </Box>

    <Divider sx={{ my: 2 }} />

    {/* Technician Progress */}
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        Technician
      </Typography>
      <Box display="flex" width="100%" mb={1}>
        <Box flex={0.42} bgcolor="white" border="1px solid black" />
        <Box flex={0.58} bgcolor="#bcbcbc" border="1px solid black" />
      </Box>
      <Box display="flex" gap={3}>
        <Typography variant="caption">
          ☐ Unassigned
        </Typography>
        <Typography variant="caption">
          ⬛ Assigned
        </Typography>
      </Box>
    </Card>
  </GreyBorderCard>
);
