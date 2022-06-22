import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "../actions/cartActions";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import Loader from "../components/loader";


export default function Cart() {

  const dispatch = useDispatch();

  const { cartItems } = useSelector(state => state.cart)

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id))
  }

  const increaseQty = (id) => {
    const item = cartItems.find(function (e) {
      return e.product_id == id
    })
    const quantity = item ? item.quantity : 1;
    const stock = 10;
    const newQty = quantity + 1;

    if (newQty > stock) return;

    dispatch(addItemToCart(id, newQty))
  }

  const decreaseQty = (id, quantity) => {
    console.log("decreasing  qty")
    const newQty = quantity - 1;

    if (newQty <= 0) return;

    dispatch(addItemToCart(id, newQty))

  }

  return <div>
    <Navbar />
    <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
          <div className="d-inline-flex">
            <p className="m-0"><a href>Home</a></p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shopping Cart</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Cart Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            {cartItems.length === 0 ? <h2 className="text-center">Your cart is empty</h2> :
              <table className="table table-bordered text-center mb-0">
                <thead className="bg-secondary text-dark">
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {cartItems.map(item => (
                    <tr>
                      <td className="align-middle"><img src={process.env.PUBLIC_URL + "/img/product-2.jpg"} alt="" style={{ width: '50px' }} />
                        {item.product_name}</td>
                      <td className="align-middle">$150</td>
                      <td className="align-middle">
                        <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                          <div className="input-group-btn">
                            <button onClick={() => decreaseQty(item.product_id, item.quantity)} className="btn btn-sm btn-primary btn-minus">
                              <i className="fa fa-minus" />
                            </button>
                          </div>
                          <span className="form-control form-control-sm bg-secondary text-center">{item.quantity}</span>
                          <div className="input-group-btn">
                            <button onClick={() => increaseQty(item.product_id, item.quantity)} className="btn btn-sm btn-primary btn-plus">
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">$150</td>
                      <td className="align-middle"><button onClick={() => removeCartItemHandler(item.product_id)} className="btn btn-sm btn-primary"><i className="fa fa-times" /></button></td>
                    </tr>
                  ))}

                </tbody>
              </table>
            }
          </div>
          <div className="col-lg-4">
            <form className="mb-5" action>
              <div className="input-group">
                <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal</h6>
                  <h6 className="font-weight-medium">$150</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">$160</h5>
                </div>
                {cartItems.length !== 0 && <Link to="/checkout" className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart End */}
    </div>

    <Footer />
  </div>
}