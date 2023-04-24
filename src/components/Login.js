import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = ({ totalQuantity, LoginFunc, error }) => {
const [details, setDetails] = useState({email: '', password: ''});

const submitHandler = e => {
  e.preventDefault();

  LoginFunc(details);
}

  return (
    <>
    <Header totalQuantity={totalQuantity} />
    <div className="form">
        <h2>Login To Your Account</h2>
        {(error !== "") ? <div className="error">{error}</div> : ""}
      <form className="loginbox" onSubmit={submitHandler}>
        <input 
        placeholder="Email" 
        type="text" 
        name="email" 
        id="email"
        onChange={e => setDetails({...details, email: e.target.value})}
        value={details.email}
        />
        <input 
        autoComplete="off"
        placeholder="Password" 
        type="password" 
        name="password" 
        id="password"
        onChange={e => setDetails({...details, password: e.target.value})}
        value={details.password}
        />
        <button id="submit">Login</button>
        <p>Don't have an account? <Link to="/register" className="sign-up">Sign up!</Link></p>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default Login