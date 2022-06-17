import Footer from "../components/footer";
import Navbar from "../components/navbar";


export default function Checkout() {
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
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                <tr>
                  <td className="align-middle"><img src={process.env.PUBLIC_URL + "/img/product-1.jpg"} alt="" style={{ width: '50px' }} /> Colorful Stylish Shirt</td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ width: '0px' }}>
                      <span type="text" className="text-center">1</span>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                </tr>
                <tr>
                  <td className="align-middle"><img src={process.env.PUBLIC_URL + "/img/product-2.jpg"} alt="" style={{ width: '50px' }} /> Colorful Stylish Shirt</td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ width: '0px' }}>
                      <span type="text" className="text-center">1</span>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                </tr>
                <tr>
                  <td className="align-middle"><img src={process.env.PUBLIC_URL + "/img/product-3.jpg"} alt="" style={{ width: '50px' }} /> Colorful Stylish Shirt</td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ width: '0px' }}>
                      <span type="text" className="text-center">1</span>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                </tr>
                <tr>
                  <td className="align-middle"><img src={process.env.PUBLIC_URL + "/img/product-4.jpg"} alt="" style={{ width: '50px' }} /> Colorful Stylish Shirt</td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ width: '0px' }}>
                      <span type="text" className="text-center">1</span>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                </tr>
                <tr>
                  <td className="align-middle"><img src={process.env.PUBLIC_URL + "/img/product-5.jpg"} alt="" style={{ width: '50px' }} /> Colorful Stylish Shirt</td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ width: '0px' }}>
                      <span type="text" className="text-center">1</span>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-5" action>
              <div className="input-group">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Shipping Address
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item active disabled" href="#">Action</a>
                    <a class="dropdown-item">Address 1</a>
                    <a class="dropdown-item">Address 3</a>
                    <a class="dropdown-item">Address 3</a>
                  </div>
                  <button class="btn btn-primary mx-5" type="button">Add New Address</button>
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
                <button className="btn btn-block btn-primary my-3 py-3">Proceed To Payment</button>
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