import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.144.1:3001",
});

export default api;
