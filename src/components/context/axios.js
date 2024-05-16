import axios from "axios";

export default axios.create({
  // Url for the backend
  baseURL: "http://127.0.0.1:5555",
});
