import React from 'react'

import {
  Snackbar,
  Alert as MuiAlert,
  Stack,
} from '@mui/material/'

const CustomizedSnackbar = ({open, text, onClose, severity}) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    onClose()
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {text}
        </MuiAlert>
      </Snackbar>
    </Stack>
  )
}

export default CustomizedSnackbar
