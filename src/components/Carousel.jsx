/* eslint-disable react/prop-types */
const Carousel = ({ data, idx }) => {
  const carouselId = `carousel-${idx}`

  return (
      <div className="card">
        <div id={carouselId} className="carousel slide" >
          <div className="carousel-indicators">
            { data.imagenes.map((imagen, idx) => (
              <button key={idx} type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to={idx} className={idx === 0 ? 'active' : ''} aria-current={idx === 0} aria-label={`Slide ${idx + 1}`}></button>
            ))}
          </div>
          <div className="carousel-inner">
            {data.imagenes.map((imagen, idx) => (
              <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                <img src={imagen} className="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-footer"><h5 className="text-center">{data.titulo+ " " + `${idx+1}`}</h5></div>
      </div>
  );
};

export default Carousel;

