import { useState } from "react";
import axios from "axios";

function UpdateProfile() {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState({
    name: "",
    phone: "",
    department: "",
    salary: "",
    role: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const updateEmployee = () => {
    axios.put(`http://localhost:7070/api/employee/update/${id}`, employee)
      .then(() => alert("Updated Successfully"))
      .catch(() => alert("Update Failed"));
  };

  return (
    <div className="container">
      <h2>Update Employee</h2>

      <input placeholder="Employee ID" onChange={(e) => setId(e.target.value)} />

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="department" placeholder="Department" onChange={handleChange} />
      <input name="salary" placeholder="Salary" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />

      <button onClick={updateEmployee}>Update</button>
    </div>
  );
}

export default UpdateProfile;