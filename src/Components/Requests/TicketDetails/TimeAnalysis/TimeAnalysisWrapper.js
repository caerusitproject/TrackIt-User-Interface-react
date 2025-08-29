import React from 'react'
import { Box } from '@mui/material';
import RequestSLA from "./RequestSLA";
import {TimeElapsedAnalysis} from "./TimeElapsedAnalysis";
import {GroupTechnicianTables} from "./GroupTechnicianTables";


export default function TimeAnalysisWrapper() {
  return (
    <Box>
        <RequestSLA />
        <TimeElapsedAnalysis />
        <GroupTechnicianTables />
    </Box>
  )
}
