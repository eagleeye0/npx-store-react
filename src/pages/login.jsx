import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Login() {
    return <div>
        <Navbar />
        <div>
            {/* Page Header Start */}
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Login</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><a href>Home</a></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Login</p>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div class="col-lg-7 mb-5">
                        <div class="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">

                                <div class="control-group">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="form-control" id="subject" placeholder="Password"
                                        required="required" data-validation-required-message="Please enter a subject" />
                                    <p class="help-block text-danger"></p>
                                </div>

                                <div>
                                    <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}