import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../state/auth'

import {
  TextField,
  Stack,
} from '@mui/material/'

import ButtonLoading from '../components/ButtonLoading'

const Login = ()=> {
  const [form, setForm] = useState({
    name: {
      value: '',
      error: false
    },
    lastname: {
      value: '',
      error: false
    },
  })
  const { user, setUser } = useAuth()
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  const handleInputChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: {
        value,
      },
    })
  }

  const handleFormSubmit = ()=> {
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

    if(!form.lastname.value) {
      hasError = true
      newFormState.lastname = {
        value: form.lastname.value,
        error: true,
        helperText: 'Campo obrigatório'
      }
    }

    if(hasError) {
      return setForm(newFormState)
    }else{
      setLoading(true)

      setTimeout(()=> {
        setLoading(false)
        setUser({
          logged: true,
          name: form.name.value,
          lastname: form.lastname.value,
        })
  
        navigate('/')
      }, 4000)
    }
  }

  return (
    <>
      <Stack direction='column' maxWidth='400px' margin='0 auto'
      spacing={{ xs: 2, sm: 3, md: 4 }}>
        <TextField
          name="name"
          label="Digite seu Nome:"
          value={form.name.value}
          error={form.name.error}
          helperText={form.name.error? form.name.helperText : ''}
          onChange={handleInputChange}
        />
        <TextField
          name="lastname"
          label="Digite seu Sobrenome:"
          value={form.lastname.value}
          error={form.lastname.error}
          helperText={form.lastname.error? form.lastname.helperText : ''}
          onChange={handleInputChange}
        />
        <ButtonLoading onClick={handleFormSubmit} text="Enviar" loading={loading} />
      </Stack>  
    </>
  )
}

export default Login