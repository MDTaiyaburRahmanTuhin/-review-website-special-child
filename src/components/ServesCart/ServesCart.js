import React from 'react';
import './ServesCart.css'

const ServesCart = (props) => {
    const { name, img, price } = props.servess || {}
    return (
        <div className="col-md-3 g-4">
            <div className="row g-1">
                <div className="card">
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="img-size" src={img} alt="" />
                    </div>
                    <h5>{name}</h5>
                    <p><small>OUR FEE: {price}</small></p>
                    <button className="btn">LEARN MORE</button>
                </div>

            </div>

        </div>
    );
};

export default ServesCart;