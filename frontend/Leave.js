import { useState } from "react";
import axios from "axios";

function Leave() {
  const [leaveData, setLeaveData] = useState({
    employeeId: "",
    leaveDate: "",
    reason: ""
  });

  const handleChange = (e) => {
    setLeaveData({
      ...leaveData,
      [e.target.name]: e.target.value
    });
  };

  const applyLeave = () => {
    axios.post("http://localhost:7070/api/leave/apply", leaveData)
      .then(res => {
        alert(res.data);
        setLeaveData({
          employeeId: "",
          leaveDate: "",
          reason: ""
        });
      })
      .catch(() => alert("Error applying leave"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Apply Leave</h2>

      <input
        name="employeeId"
        placeholder="Employee ID"
        value={leaveData.employeeId}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="leaveDate"
        type="date"
        value={leaveData.leaveDate}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="reason"
        placeholder="Reason"
        value={leaveData.reason}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={applyLeave}>Submit Leave</button>
    </div>
  );
}

export default Leave;