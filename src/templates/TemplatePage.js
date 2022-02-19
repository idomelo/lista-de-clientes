import React from 'react'

import { Typography } from '@mui/material/'

const TemplatePage = ({ titlePage, component }) => {

  return (
    <>
      <Typography variant="h5" sx={{textAlign: 'center'}} gutterBottom>
        {titlePage}
      </Typography>

      {component}
    </>
  )
}

export default TemplatePage