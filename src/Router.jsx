import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Precios from './pages/Precios'
import Galeria from './pages/Galeria'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='precios' element={<Precios />}/>
        <Route path='carrousel' element={<Galeria />}/>
      </Route>
    </Routes>
  )
}

export default Router