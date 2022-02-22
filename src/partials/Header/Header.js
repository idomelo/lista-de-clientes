import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem ,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { 
  Menu as MenuIcon,
  Home as HomeIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material/'

import useStyles from './Header.style'

const Header = ({ user }) => {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleToggleMenu = ()=> {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    navigate(route)
    handleToggleMenu()
  }

  const handleClickButton = route => {
    navigate(route)
  }  
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleToggleMenu()}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" className={classes.title}>
            Lista de Clientes
          </Typography>
          {
            user.logged
              ? <Typography variant="h6">{`Bem vindo, ${user.name} ${user.lastname} !`}</Typography>
              : <Button color="inherit" onClick={() => handleClickButton('/login')}>Login</Button>
          }
        </Toolbar>
      </AppBar>

      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>

        <List>
          <ListItem button onClick={() => handleMenuClick('/')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Página Inicial</ListItemText>
          </ListItem>
          
          <ListItem button onClick={() => handleMenuClick('/add')}>
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
            <ListItemText>Cadastrar Cliente</ListItemText>
          </ListItem>
        </List>

      </Drawer>
    </>  
  )
}

export default Header
