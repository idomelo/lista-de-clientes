import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import {
  TextField,
  Stack,
} from '@mui/material/'

import Snackbar from '../../components/Snackbar'
import ButtonLoading from '../../components/ButtonLoading'
import OutputRequestViewer from '../../components/OutputRequestViewer'


const Edit = () => {
  const { id } = useParams()
  
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

  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [ reqApi, setReqApi] = useState(`{ 
    

  }`)
  const [reqStatus, setReqStatus] = useState('')

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
    .then( response => {
      const { data } = response.data
      setForm({
        name: {
        value: data.first_name,
        error: false
        },
        job: {
          value: data.job,
          error: false
        },
      })
    })
  }, [])

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

    axios.patch(`https://reqres.in/api/users/${id}`, {
      name: form.name.value,
      job: form.job.value
    }).then((res) => {
      setLoading(false)
      setOpenSnackbar(true)
      const data  = res.data
      const dataKeys = Object.keys(data)
      setReqStatus(`${res.status}`)
      if (data && dataKeys) {
        setReqApi(
        `   { 
          "${dataKeys[0]}": "${data.name}",
          "${dataKeys[1]}": "${data.job}",
          "${dataKeys[2]}": "${data.updatedAt}"
        }`)
      } else {
        setReqApi('Algum erro aconteceu, Tente novamente!')
      }
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
        <ButtonLoading text="Salvar Alterações" onClick={handleRegisterButton} loading={loading} />
        <Stack direction='column' maxWidth='400px' margin='0 auto' spacing={{ xs: 2, sm: 3, md: 4 }}>
          <OutputRequestViewer reqStatus={reqStatus} reqApi={reqApi}/>
          
        </Stack>
      </Stack>
      <Snackbar open={openSnackbar} severity="success" text="Alterações Salvas com sucesso!" onClose={() => setOpenSnackbar(false)}/>
    </>
    
    
  )
}

export default Edit
