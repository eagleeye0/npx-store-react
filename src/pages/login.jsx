import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let { loading } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const submitHandler = (e) => {
        console.log(email, password);
        e.preventDefault();
        dispatch(login(email, password));
        navigate(-1);
    }

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
                            {loading ? <Loader /> : (
                                <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={submitHandler}>

                                    <div class="control-group">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email" value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required="required" data-validation-required-message="Please enter your email" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <input type="password" class="form-control" id="subject" placeholder="Password"
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                            required="required" data-validation-required-message="Please enter a password" />
                                        <p class="help-block text-danger"></p>
                                    </div>

                                    <div>
                                        <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}