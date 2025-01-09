/* eslint-disable react/prop-types */
const Carousel = ({ data, idx }) => {
  const carouselId = `carousel-${idx}`

  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <div id={carouselId} className="carousel slide" >
          <div className="carousel-indicators">
            <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={data.imagenes[0]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={data.imagenes[1]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={data.imagenes[2]} className="d-block w-100" alt="..." />
            </div>
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
    </div>
  );
};

export default Carousel;

