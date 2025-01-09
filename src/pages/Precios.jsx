import datos from '../datos.json'; 
import { CardPrecio } from "../components/CardPrecio";

const Precios = () => {
  return (
    <div>
      <h3 className='text-center mb-4'>Pricing</h3>
      <div className="row g-3">
      { datos.precios.map((precio, idx) => (
          <CardPrecio data={precio} key={idx}/>
      ))}
    </div>
    </div>
  );
};

export default Precios;
