import React, { useState, useEffect } from 'react'
import CustomersCard from '../components/CustomersCard'
import axios from 'axios'

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
      {
        customers.map(item => {
          return (
            <CustomersCard name={item.first_name} lastName={item.last_name} email={item.email} avatar={item.avatar}/>
          )
        })
      }
    </>
  )
}

export default Customers