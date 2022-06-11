import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { register } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";


export default function Register() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    let { loading } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(first_name, last_name, email, password));
        navigate(-1);
    }

    return <div>
        <Navbar />
        <div>
            {/* Page Header Start */}
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Register</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><a href>Home</a></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Register</p>
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
                                        <input type="text" class="form-control" id="first_name" minLength={2} placeholder="First Name" value={first_name}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required="required" data-validation-required-message="Please enter your first name" />
                                        <p class="help-block text-danger"></p>
                                    </div><div class="control-group">
                                        <input type="text" class="form-control" id="last_name" placeholder="Last Name" value={last_name}
                                            onChange={(e) => setLastName(e.target.value)} />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email" value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required="required" data-validation-required-message="Please enter your email" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <input type="password" class="form-control" id="password" placeholder="Password"
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                            required="required" data-validation-required-message="Please enter a password" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <input type="password" class="form-control" id="password" placeholder="Confirm Password"
                                            value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)}
                                            required="required" data-validation-required-message="Please re-enter your password" />
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