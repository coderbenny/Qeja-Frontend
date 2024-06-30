import axios from "axios";

export default axios.create({
  // Url for the backend
  // baseURL: "https://qeja-backend.onrender.com/",
  baseURL: "http://127.0.0.1:5555/",
});
