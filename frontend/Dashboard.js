import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
  <div className="container">

    <h1>Employee Dashboard</h1>

    <button onClick={() => navigate("/leave")}>
      Apply Leave
    </button>

    <button onClick={() => navigate("/update")}>
      Update Profile
    </button>

    <button onClick={logout}>
      Logout
    </button>

  </div>
);
}

export default Dashboard;