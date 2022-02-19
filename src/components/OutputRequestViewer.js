import React from 'react'

import {
  TextField,
  Typography,
} from '@mui/material/'

const OutputRequestViewer = ({reqStatus, reqApi}) => {
  return(
    <>
      <Typography variant="h5" sx={{textAlign: 'center'}} gutterBottom>
        Resposta da API:
      </Typography>
      <TextField
        name="output-responseStatus"
        id="outlined-basic"
        disabled
        value={`Status: ${reqStatus}`}
      />
      <TextField
        name="output-response"
        id="outlined-multiline-flexible"
        multiline
        disabled
        value={reqApi}
        rows="6"
      />
    </>
  )

}


export default OutputRequestViewer
