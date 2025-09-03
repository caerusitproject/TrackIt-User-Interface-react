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

export const GroupTechnicianTables = () => (
  <>
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        Group Analysis
      </Typography>
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Group</TableCell>
              <TableCell>OLA Time</TableCell>
              <TableCell>Time Elapsed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Unassigned</TableCell>
              <TableCell>-</TableCell>
              <TableCell>53 minutes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Application Support</TableCell>
              <TableCell>Not Configured</TableCell>
              <TableCell>56 minutes</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Card>

    <Card sx={{ p: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        Technician Analysis
      </Typography>
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Technician</TableCell>
              <TableCell>Time Elapsed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Unassigned</TableCell>
              <TableCell>53 minutes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Update new status</TableCell>
              <TableCell>56 minutes</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Card>
  </>
);