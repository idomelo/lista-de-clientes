import { Typography } from '@mui/material/'

const TemplatePage = ({ title, component }) => {

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
    
      {component}
    </>
  )
}

export default TemplatePage