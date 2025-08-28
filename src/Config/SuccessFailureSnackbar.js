import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';

export default function SuccessFailureSnackbar() {
    const vertical='top',horizontal='right';
    const [open, setOpen] = React.useState(false)

const handleClose = (event, reason) => {
    // "clickaway" means user clicked outside → usually you ignore that
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
    {/* <Button onClick={()=>setOpen(true)}>Click</Button> */}
    <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
    >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
      </>
  )
}
