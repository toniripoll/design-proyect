import Logo from "./Logo";
import datos from "../datos.json";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light mt-0 border-bottom border-1 border-gray p-2 mb-4">
      <div className="d-flex gap-3 align-items-center">
        <Logo />
        <p className="fs-4 mb-0">{datos.header.nombre}</p>
      </div>
      <div>
        {datos.header.links.map((link, index) => (
          <Link className="mx-3 text-dark text-decoration-none" key={index} to={link.url}>{link.texto}</Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
