import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'

import CustomersCard from '../components/CustomersCard'


const Customers = () => {
  const [customers, setCustomers] = useState([])

  useEffect( () => {
    axios.get('https://reqres.in/api/users')
    .then( response => {
      const { data } = response.data
      setCustomers(data)
    })
  },[])

  return (
    <>
      <h1>Customers</h1>

      <Grid container spacing={3}>
        {
          customers.map(item => {
            return (
              <Grid item xs={12} md={4}>
                <CustomersCard name={item.first_name} lastName={item.last_name} email={item.email} avatar={item.avatar}/>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}

export default Customers
