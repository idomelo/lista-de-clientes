import React, { useState } from 'react'
import ModalConfirm from './ModalConfirm'

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material'

import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@mui/icons-material/'

const CustomersCard = ({
  id,
  name,
  lastName,
  email,
  avatar,
  onRemoveCustomer,
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleToggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const handleConfirmModal = () => {
    onRemoveCustomer(id)
    handleToggleModal()
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar} />
          }
          title= {`${name} ${lastName}`}
          subheader={email}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Editar usuário">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Deletar usuário" onClick={() => handleToggleModal()}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm 
        open={modalOpen}
        title="Deseja realmente excluir este Usuário?"
        message= "Essa ação não pode ser desfeita"
        onClose= {() => handleToggleModal()}
        onConfirm={handleConfirmModal}
      />
    </>
    
  )
}

export default CustomersCard