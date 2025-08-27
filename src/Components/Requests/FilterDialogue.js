import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grow from '@mui/material/Grow';
import CancelIcon from '@mui/icons-material/Cancel';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {DialogueTheme,ColorButton,ColorButtonCancel} from "../../styled_components/resuablecontainer.styled"
import { IconButton } from '@mui/material';
import moment from 'moment';
import dayjs from "dayjs";




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FilterDialogue({open,setOpen,checked,setChecked}) {
  const [loading, setLoading] = React.useState(false);
  const [dropDate, setDropDate] = React.useState({
    attributes:'',
  })
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  
  const handleClose = () => {
     setStartDate(null)
     setEndDate(null)
     setOpen(false);
  };

  const handleApply = ()=>{
    setStartDate(null)
    setEndDate(null)
    setLoading(true);
    setOpen(false);
  }
  console.log('dates and attributes__',dropDate,
startDate ? dayjs(startDate).format("YYYY-MM-DD"):'',
endDate ? dayjs(endDate).format("YYYY-MM-DD"):'')

  return (
      <DialogueTheme
        open={open}
        slots={{
          transition: Transition,
        }}
        fullWidth
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"7px"}}>
          {"Custom Filter"}<ManageSearchIcon/>
          </div>
        <div><IconButton onClick={handleClose}><CancelIcon/></IconButton></div>
        </DialogTitle>
        <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // stack rows
            gap: "20px",
            margin: "20px auto",
            width: "95%",
          }}
        >
        {/* Row 1: Select Field */}
              <Grow in={open} timeout={650}>
                <Box sx={{ flex: 1 }}>
                  <FormControl sx={{width:"48%"}}>
                    <InputLabel id="age-label">Attributes</InputLabel>
                    <Select
                      labelId="age-label"
                      id="age-select"
                      label="Attributes"
                      value={dropDate.attributes}
                      onChange={(e)=>{
                        setDropDate({...dropDate,attributes:e.target.value})
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          height: "56px", // standard height
                        },
                      }}
                    >
                      <MenuItem value={10}>Approval Status</MenuItem>
                      <MenuItem value={20}>Assets</MenuItem>
                      <MenuItem value={30}>Assigned Date</MenuItem>
                      <MenuItem value={40}>Cancellation Requested</MenuItem>
                      <MenuItem value={50}>Category</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grow>

              {/* Row 2: Two DatePickers side by side */}
              <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
              >
              <Grow in={open} timeout={800}>
                <Box sx={{ flex: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Start Date"
                      value={startDate}
                      format="DD-MM-YYYY"
                      onChange={(newValue)=>{
                        setStartDate(newValue)
                      }}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          sx: {
                            "& .MuiOutlinedInput-root": {
                              height: "56px",
                            },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </Grow>

              <Grow in={open} timeout={950}>
                <Box sx={{ flex: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="End Date"
                      value={endDate}
                      format="DD-MM-YYYY"
                      onChange={(newValue)=>{
                        setEndDate(newValue)
                      }}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          sx: {
                            "& .MuiOutlinedInput-root": {
                              height: "56px",
                            },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </Grow>
            </Box>
          </Box>
          
          </DialogContent>
        <DialogActions>
          <ColorButtonCancel onClick={handleClose}>Cancel</ColorButtonCancel>
          <ColorButton 
          // style={{cursor: diabled == true ? "not-allowed":''}}
          loading={loading}
          loadingPosition="start" 
          disabled={false}
          onClick={handleApply}>Apply Filter</ColorButton>
        </DialogActions>
    
      </DialogueTheme>
  )
}
