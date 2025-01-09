import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    // min-vh-100 hace que el contenedor ocupe al menos el 100% del alto de la pantalla
    <div className="d-flex flex-column min-vh-100">
        <Header />
        {/* Cuando no haya suficiente contenido, el contenedor del outlet
         crecerá para ocupar todo el espacio (empujando al footer abajo*/}
      <div className="flex-grow-1"> 
        <div className="container">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
