/* eslint-disable react/prop-types */
export const CardPrecio = ({ data }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100">
        <div className="card-header text-center">
          <h3>{data.titulo}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center mb-3">
            {data.precio}/{data.per}
          </h5>
          <div className="card-text text-center">
            {data.features.map((feature, idx) => (
              <p key={idx}>
                {feature}
              </p>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary w-100"
            onClick={() => console.log("Pagando...")}
          >
            {data.textBoton}
          </button>
        </div>
      </div>
    </div>
  );
};
