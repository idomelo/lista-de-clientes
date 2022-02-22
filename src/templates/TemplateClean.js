import React from 'react'

import Container from '@mui/material/Container'
import { makeStyles } from '@material-ui/styles'

//JSS
const useStyles = makeStyles({
  container: {
    padding: '10px 0',
  },
})

const Default = ({ Component }) => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container} maxWidth="md">
        <Component/>
      </Container>
    </>
  )
}

export default Default