import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [employee,setEmployee]=useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    department:"",
    salary:"",
    role:""
  });

  const handleChange=(e)=>{
    setEmployee({
      ...employee,
      [e.target.name]:e.target.value
    });
  };

  const register=()=>{

    axios.post(
      "http://localhost:7070/api/auth/register",
      employee
    )
    .then((res)=>{

      alert(res.data);

      if(res.data==="Registration Successful"){
        navigate("/");
      }

    });
  };

  return (
  <div className="container">

    <h2>Employee Registration</h2>

    <input name="name" placeholder="Name" onChange={handleChange}/>
    <input name="email" placeholder="Email" onChange={handleChange}/>
    <input name="password" placeholder="Password" onChange={handleChange}/>
    <input name="phone" placeholder="Phone" onChange={handleChange}/>
    <input name="department" placeholder="Department" onChange={handleChange}/>
    <input name="salary" placeholder="Salary" onChange={handleChange}/>
    <input name="role" placeholder="Role" onChange={handleChange}/>

    <button onClick={register}>
      Register
    </button>

  </div>
);
}

export default Register;