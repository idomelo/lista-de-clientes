import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Grid from '@mui/material/Grid'

import CustomersCard from '../../components/CustomersCard'

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    axios.get('https://reqres.in/api/users')
    .then( response => {
      const { data } = response.data
      setCustomers(data)
    })
  },[])

  const handleRemoveCustomer = id => {
    axios.delete(`https://reqres.in/api/users/${ id }`)
    .then( () => {
      const newCustomersState = customers.filter(customer => customer.id !== id)
      setCustomers(newCustomersState)
    })
  }

  const handleEditCustomer = id => {
    navigate(`/edit/${ id }`)
  }

  return (
    <Grid container spacing={4}>
      {
        customers.map(item => {
          return (
            <Grid item sx={{padding: 0}}xs={12} sm={6} md={4}>
              <CustomersCard
                id={item.id}
                name={item.first_name} 
                lastName={item.last_name} 
                email={item.email} 
                avatar={item.avatar}
                onRemoveCustomer={handleRemoveCustomer}
                onEditCustomer={handleEditCustomer}
              />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default Customers
