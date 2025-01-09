import Carousel from '../components/Carousel'
import datos from '../datos.json'

const Galeria = () => {
  return (
    <div>
      <h3 className='text-center mb-4'>Galeria de fotos</h3>
      <div className="row d-flex justify-content-start g-5">
      { datos.carrousel.map((prod, idx) => (
        <div key={idx} className="col-12 col-sm-8 col-md-6 col-lg-4">
        <Carousel key={idx} data={prod} idx={idx} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Galeria

