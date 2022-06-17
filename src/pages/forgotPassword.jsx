import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";


export default function ForgotPassword() {

    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const submitHandler = (e) => {
        // console.log(email, password);
        // e.preventDefault();
        // dispatch(login(email, password));
        // navigate(-1);
    }

    return <div>
        <Navbar />
        <div>
            {/* Page Header Start */}
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Forgot Password</h1>
                </div>
            </div>
            {/* Page Header End */}

            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div class="col-lg-7 mb-5">
                        <div class="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={submitHandler}>

                                <div class="control-group">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required="required" data-validation-required-message="Please enter your email" />
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