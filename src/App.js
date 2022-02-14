import TemplateDefault from './templates/Default'
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
            <Route path="/" element={ <Home /> } />
            <Route path="/customers" element={ <Customers /> } />
          </Routes>
        </BrowserRouter>
      </TemplateDefault>
    </>
  )
}

export default App