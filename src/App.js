import React from 'react'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/TemplatePage'

import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomersEdit from './pages/customers/Edit'

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
            <Route path="/" element={<TemplatePage titlePage="" component={<CustomersList />} />}  />
            <Route path="/edit/:id" element={<TemplatePage titlePage="Editar Cliente:" component={<CustomersEdit />} />}  />
            <Route path="/add" element={<TemplatePage titlePage="Adicionar Cliente:" component={<CustomersRegister />} />}  />
          </Routes>
        </TemplateDefault>
      </BrowserRouter>
    </>
  )
}

export default App