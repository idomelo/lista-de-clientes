import React from 'react'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/TemplatePage'

import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomersEdit from './pages/customers/Edit'

import Login from './pages/Login'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TemplateDefault>
          <Routes>
            <Route path="/login" element={<TemplatePage titlePage="Acesso Restrito:" subtitle="Não há validação Real, apenas digite algo para teste"Component={<Login/>} />} />
            <Route path="/" element={<TemplatePage titlePage="Clientes Cadastrados:" Component={<CustomersList/>} />} />
            <Route path="/edit/:id" element={<TemplatePage titlePage="Editar Cliente:" Component={<CustomersEdit/>} />} />
            <Route path="/add" element={<TemplatePage titlePage="Adicionar Cliente:" Component={<CustomersRegister/>} />} />
          </Routes>
        </TemplateDefault>
      </BrowserRouter>
    </>
  )
}

export default App

// (
//   <TemplatePage titlePage="Adicionar Cliente:" Component={<CustomersList/>} />
// ) : (
//   <TemplatePage titlePage="Adicionar Cliente:" Component={<Login/>} />
// )
// )} /> 