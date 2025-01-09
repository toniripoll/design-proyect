import Carousel from '../components/Carousel'
import datos from '../datos.json'

const Galeria = () => {
  return (
    <div>
      <h3 className='text-center mb-4'>Galeria de fotos</h3>
      <div className="row d-flex justify-content-start g-5">
      { datos.carrousel.map((prod, idx) => (
        <Carousel key={idx} data={prod} idx={idx} />
      ))}
    </div>
    </div>
  )
}

export default Galeria

