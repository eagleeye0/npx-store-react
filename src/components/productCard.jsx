import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (product) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + "/img/product-1.jpg"} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{product.product.product_name}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>{product.product.sale_price}</h6><h6 className="text-muted ml-2"><del>{product.product.mrp_price}</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to={"/product/" + product.product.id} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</Link>
                    <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard