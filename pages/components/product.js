import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Product = props => {
  return (
        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0" key={props.device.id}>
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Todays Combo Offer</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{width:"35px",height:"35px"}}>
              <p className="text-white mb-0 small">x4</p>
            </div>
          </div>
          <img src={props.device.image}
            className="card-img-top" alt="Laptop" style={{width:"10rem", height:"20rem", marginLeft:"7rem"}}/>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">{props.device.brand}</a></p>
              <p className="small text-danger"><s>{props.device.price}</s></p>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">{props.device.name}</h5>
              <h5 className="text-dark mb-0">{props.device.discount}</h5>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available: <span className="fw-bold">{props.device.quantity}</span></p>
              <div className="ms-auto text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="d-flex justify-content-between mb-2">
                    <button type="button" className="btn btn-primary" onClick={()=>{

                    }}>Add to Cart</button>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Product