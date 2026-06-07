import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();

  const login=()=>{

    axios.post(
       "http://localhost:7070/api/auth/login",
      {email,password}
    )
    .then((res)=>{

      if(res.data==="Login Successful"){
        navigate("/dashboard");
      }
      else{
        alert(res.data);
      }

    });
  };

 return (
  <div className="container">

    <h2>Employee Login</h2>

    <input
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
    />

    <button onClick={login}>
      Login
    </button>

    <p>
      New User?
      <Link to="/register"> Register Here</Link>
    </p>

  </div>
);
}

export default Login;