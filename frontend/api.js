import axios from "axios";
import UpdateProfile from "./pages/UpdateProfile";
const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default API;