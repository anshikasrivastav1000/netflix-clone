import React ,{useState} from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  const [signState,setSignState] =useState("Sign In")
  return (
    <div className="Login">
  <img src={logo} className="Login-logo"/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up"? <input type="text" placeholder="Your Name" />:<></>}
         
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        {  <button type="submit">{signState}</button>}
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" /> 
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          
          
        </form>
        <div className="form-switch">
          {signState ==="Sign In"?<p>New To Netflix<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span> </p>:
          <p>Already have an account?<span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>}
          
         
        </div>
      </div>
    </div>
  )
}

export default Login