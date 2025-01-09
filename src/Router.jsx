import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Precios from './pages/Precios'
import Galeria from './pages/Galeria'
import Inicio from './components/Inicio'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/' element={<Inicio />}/>
        <Route path='precios' element={<Precios />}/>
        <Route path='carrousel' element={<Galeria />}/>
      </Route>
    </Routes>
  )
}

export default Router