import TemplateDefault from './templates/Default'
import TemplatePage from './templates/TemplatePage'

import Home from './pages/Home'
import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'

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
            <Route path="/" element={<TemplatePage title="Página Inicial" component={<Home />} />}  />
            <Route path="/customers/add" element={<TemplatePage title="Adicionar Cliente" component={<CustomersRegister />} />}  />
            <Route path="/customers" element={<TemplatePage title="Clientes" component={<CustomersList />}/>} />
          </Routes>
        </TemplateDefault>
      </BrowserRouter>
    </>
  )
}

export default App