import React, { useState } from 'react'
import axios from 'axios'

import {
  TextField,
  Stack,
} from '@mui/material/'

import Snackbar from '../../components/Snackbar'
import ButtonLoading from '../../components/ButtonLoading'

const Register = () => {
  const [form, setForm] = useState({
    name: {
      value: '',
      error: false
    },
    job: {
      value: '',
      error: false
    },
  })
  const [loading, setLoading] = React.useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: {
        value,
      },
    })
  }

  const handleRegisterButton = () => {
    let hasError = false

    let newFormState = {
      ...form,
    }

    if(!form.name.value) {
      hasError = true
      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Campo obrigatório'
      }
    }

    if(!form.job.value) {
      hasError = true
      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Campo obrigatório'
      } 
    }

    if(hasError) {
      return setForm(newFormState)
    }else{
      setLoading(true)
    }

    axios.post('https://reqres.in/api/users', {
      name: form.name.value,
      job: form.job.value
    }).then(response => {
      setLoading(false)
      setOpenSnackbar(true)
    })
  }

  return (
    <>
      <Stack direction='column' maxWidth='400px' margin='0 auto'
      spacing={{ xs: 2, sm: 3, md: 4 }}>
        <TextField
          name="name"
          id="outlined-basic"
          label="Digite o Nome:"
          value={form.name.value}
          error={form.name.error}
          helperText={form.name.error? form.name.helperText : ''}
          onChange={handleInputChange}
        />
        <TextField
          name="job"
          id="outlined-basic"
          label="Digite o Cargo:"
          value={form.job.value}
          error={form.job.error}
          helperText={form.job.error? form.job.helperText : ''}
          onChange={handleInputChange}
        />
        <ButtonLoading text="Confirmar" onClick={handleRegisterButton} loading={loading} />
      </Stack>
      <Snackbar open={openSnackbar} severity="success" text="Cliente cadastrado com sucesso!" onClose={() => setOpenSnackbar(false)}/>
    </>
    
    
  )
}

export default Register
