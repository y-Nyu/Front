import style from './SaleDetail.module.css'

const SaleDetail = () => {
  return (
    <div className={style.list}>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="" alt="" className="img-fluid rounded-start"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">{date}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SaleDetail;
