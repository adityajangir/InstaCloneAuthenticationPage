import React from 'react'
import './signin.css'
import insta from './insta.png'

const Signin = () => {
    return (
        <>
        <div className="auth">
        <div className="page">
        <div className="imgDiv">
            <img className="instaImage" src={insta} alt="insta"/>
        </div>
        <div className="container">
          <section className="body">
              <h1 className="instagram">Instagram</h1>
              <div className ="main">
              <form className="form" action="#">
              <input className="input" type="text" placeholder="Phone number, username, or email"/>
              <input className="input" type="password" placeholder="Password"/>
              </form>
              </div>
              <span className="login">Log in</span>
              {/* <span>OR</span> */}
              <span className="Forgetpassword">Forget password?</span>
         </section>  
        <section className="footer">
              <div className="signupdiv">
                    <div className="abcd">
                        <span className="account signup">Don't have an account?</span>
                        <a className="signup" href="/signup">Sign up</a>
                    </div>  
                </div>  
        </section> 
        </div>
        </div>
        </div>
        </>
    )
}

export default Signin
