import React from 'react'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Signup = () => {
    return ( 
        <>
        <div className="abc">
            <div className="container1">
                <div className="main12">
                    <div className="main1">
                        <div>
                            <h1 className="instagram">Instagram</h1>
                        </div>
                        <div className="logfb">
                            <p>Sign up to see photos and videos with your friends.</p>
                            <button className="btn btn-primary">Log in with Facebook</button>
                        </div>
                        <div className="or">
                            <div className="orline"></div>
                            <div><p>OR</p></div>
                            <div className="orline"></div>
                        </div>
                        <form action="">
                            <input placeholder="Mobile number or email adderss" className="form1 form-control" />
                            <input placeholder="Full Name" className="form1 form-control" />
                            <input placeholder="Username" className="form1 form-control" />
                            <input placeholder="Password" className="form1 form-control" />
                            <div><button className="signupbtn btn btn-primary">Sign Up</button></div>
                            
                            <p>By signing up, you agree to our <strong>Terms, Data Policy and Cookie Policy</strong>.</p>
                        </form>
                    </div>
                </div>
                <div className="main2">
                        <div className="signindiv">
                                <p className="account signup">Have an account? &nbsp;</p>
                                <a className="signin" href="/">Log In</a>
                        </div>  
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Signup;