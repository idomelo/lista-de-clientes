import TemplateDefault from './templates/Default'
import TemplatePage from './templates/TemplatePage'

import Home from './pages/Home'
import Customers from './pages/Customers'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <TemplateDefault>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TemplatePage title="Página Inicial" component={<Home />} />}  />
              
            
            <Route path="/customers" element={<TemplatePage title="Clientes" component={<Customers />}/>} />
              
          </Routes>
        </BrowserRouter>
      </TemplateDefault>
    </>
  )
}

export default App