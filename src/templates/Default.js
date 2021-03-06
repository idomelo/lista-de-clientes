import React from 'react'

import Container from '@mui/material/Container'
import { makeStyles } from '@material-ui/styles'

import Header from '../partials/Header/Header'
import useAuth from '../state/auth'

//JSS
const useStyles = makeStyles({
  container: {
    padding: '10px 0',
  },
})

const Default = ({ children }) => {
  const classes = useStyles()

  const {user} = useAuth()

  return (
    <>
      <Header user={user}/>

      <Container className={classes.container} maxWidth="md">
        { children }
      </Container>
    </>
  )
}

export default Default