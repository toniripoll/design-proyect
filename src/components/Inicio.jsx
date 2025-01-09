// import datos from '../datos.json'
// import Carousel from './Carousel'
// const Inicio = () => {
//   return (
//     <div>
//       <div className='d-flex w-100 h-100 justify-content-center position-absolute' style={{ zIndex: 1 }}>
//         <h5>Vendemos fotos</h5>
//       </div>
//       <Carousel data={datos.carrousel[0]} idx={0} />
//     </div>
//   )
// }

// export default Inicio

import datos from "../datos.json";
import Carousel from "./Carousel";
import { useNavigate } from 'react-router-dom'


const Inicio = () => {
  const navigate = useNavigate()
  return (
    <div className="position-relative">
      {/* El texto (position absolute) tomara de referencia el primer position 
      relative que tenga que en este caso es el div padre
      */}
      <div
        className="position-absolute  start-50 translate-middle text-center text-white"
        style={{ zIndex: 1, top: "10%" }}
      >
        <h5>COMPRA TU FOTO</h5>
      </div>
      <Carousel data={datos.carrousel[0]} idx={0} />
      <div className="row d-flex justify-content-center mt-3 gy-3">
        <div className="col-12 col-sm-6">
          <button className="btn btn-primary btn-lg w-100" onClick={() => navigate('/precios')}>Obten una oferta</button>
        </div>
        <div className="col-12 col-sm-6">
        <button className="btn btn-primary btn-lg w-100" onClick={() => navigate('/carrousel')}>Busca tus fotos</button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
