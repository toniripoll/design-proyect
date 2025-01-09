/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Section = ({ seccion }) => {
  return (
    <div>
      <h5>{seccion.titulo}</h5>
      <ul className="nav flex-column">
        { seccion.links.map((link, idx) => (
          <li key={idx}><Link className="text-decoration-none text-dark" to={link.url}>{link.texto}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default Section