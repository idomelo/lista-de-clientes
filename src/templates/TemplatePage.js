import React from 'react'

import { Typography } from '@mui/material/'

const TemplatePage = ({ titlePage, subtitle, Component }) => {

  return (
    <>
      <Typography variant="h5" sx={{textAlign: 'center'}} gutterBottom>
        {titlePage}
      </Typography>
      <Typography sx={{textAlign: 'center'}} gutterBottom>
        {subtitle}
      </Typography>
      
      {Component}
    </>
  )
}

export default TemplatePage