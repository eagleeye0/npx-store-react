import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/loader";


export default function Login() {

    const { isAuthenticated, loading } = useSelector(state => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const submitHandler = (e) => {
        setError("Error occured while logging in")
        e.preventDefault()
        dispatch(login(email, password))
    }

    useEffect(() => {
        console.log(error);
        if (isAuthenticated) {
            navigate(-1);
        }
    }, [isAuthenticated])


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

            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5">
                        <div className="contact-form">
                            <div id="success"></div>
                            {loading ? <Loader /> : (
                                <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={submitHandler}>

                                    <div className="control-group">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="password" className="form-control" id="subject" placeholder="Password"
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                            required="required" data-validation-required-message="Please enter a password" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <Link to="/forgot-password/" className="text-primary">Forgot Password?</Link>
                                    {error && <div className="alert alert-danger">
                                        {error}</div>
                                    }
                                    <div>
                                        <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Submit</button>
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