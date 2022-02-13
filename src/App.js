import TemplateDefault from './templates/Default'
import Home from './pages/Home'

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
          </Routes>
        </BrowserRouter>
      </TemplateDefault>
    </>
  )
}

export default App