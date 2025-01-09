import datos from '../datos.json'
import Section from './Section'

const Footer = () => {
  return (
    <div className="d-flex justify-content-between border-top border-1 border-gray p-3 mt-4 bg-light">
      <div className='fs-4'>
        {datos.header.nombre}
      </div>
      { datos.footer.map((seccion, idx) => (
        <Section key={idx} seccion={seccion} />
      ))}
    </div>
  )
}

export default Footer