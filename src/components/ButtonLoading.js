import * as React from 'react'
import {
  Box,
  CircularProgress,
  Button,
} from '@mui/material'
import {  green } from '@mui/material/colors'

const ButtonLoading = ({text, onClick, loading}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{position: 'relative' }}>
        <Button
          variant="contained"
          disabled={loading}
          onClick={onClick}
        >
          {text}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  )
}

export default ButtonLoading
