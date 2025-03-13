import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://127.0.0.1:4002/clone-8e84f/us-central1/api",
  baseURL:"http://127.0.0.1:5001/sep-449604/us-central1/api"
  // baseURL:"http://localhost:2025"
});

export { axiosInstance };
