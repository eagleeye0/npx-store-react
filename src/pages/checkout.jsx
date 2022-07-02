import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


export default function Checkout() {

  const [address, setAddress] = useState('');
  const { cartItems } = useSelector(state => state.cart)
  const noOfAddress = 3;

  function selectAddress(newAddress) {
    setAddress(newAddress);
  }

  function handlePayment() {
    if (address !== '') {
      console.log('going to payment');
    }
  }

  return <div>
    <Navbar />
    <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Checkout Details</h1>
        </div>
      </div>
      {/* Page Header End */}
      {/* Cart Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          {noOfAddress ? (
            <>
              <div className="input-group mb-5 d-block d-lg-none col-12">
                <form className="" action>
                  <select className="custom-select dropdown" onChange={(e) => { selectAddress(e.target.value) }}>
                    <option selected disabled>Select Address</option>
                    {/* <option onClick={selectAddress(this)} className="dropdown-item">Home - Akshat Jain</option> */}
                    <option value="office">Office - Akshat Jain</option>
                    <option value="other">Other - Rajat Jain</option>
                  </select>
                  <button className="btn btn-block btn-primary my-3">Add address</button>
                </form>
              </div>
              <div className="input-group mb-5 d-none d-lg-block col-12 col-lg-8">
                <form className="" action>
                  <label for="home" class="form-check border p-4 px-5 col-12">
                    <input class="form-check-input" type="radio" value="home" name="address_type" id="home" checked />
                    {/* <label class="form-check-label" for="home"> */}
                    <div class="col-12">
                      <h6>Home</h6>
                      <p>P-34, bihari colony</p>
                    </div>
                    {/* Office - Akshat Jain */}
                    {/* </div> */}
                  </label>
                  <label for="office" class="form-check border p-4 px-5 col-12">
                    <input class="form-check-input" type="radio" name="address_type" id="office" checked />
                    {/* <label class="form-check-label" for="home"> */}
                    <div class="col-12">
                      <h6>Office</h6>
                      <p>P-34, bihari colony</p>
                    </div>
                    {/* Office - Akshat Jain */}
                    {/* </div> */}
                  </label>

                  <label for="other" class="form-check border p-4 px-5 col-12">
                    <input class="form-check-input" type="radio" name="address_type" id="other" checked />
                    {/* <label class="form-check-label" for="home"> */}
                    <div class="col-12">
                      <h6>Other</h6>
                      <p>P-34, bihari colony</p>
                    </div>
                    {/* Office - Akshat Jain */}
                    {/* </div> */}
                  </label>
                  <button className="btn btn-block btn-primary my-3">Manage or add address</button>
                </form>
              </div>
            </>
          ) : (
            <>
              <button className="input-group btn btn-success-outline border mb-5 d-none d-lg-block col-12 col-lg-8">
                <h3 className="p-5 center-block text-center"><i class="fas fa-plus"></i>&nbsp;&nbsp;Add address</h3>
              </button>
            </>
          )}
          <div className="card border-secondary mb-5 col-12 col-lg-4">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Bill Summary</h4>
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
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Tax</h6>
                <h6 className="font-weight-medium">$10</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">$160</h5>
              </div>
              <button onClick={handlePayment} className="btn btn-block btn-primary my-3 py-3 px-5">Proceed To Payment</button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* Cart End */}
    </div>

    <Footer />
  </div >
}