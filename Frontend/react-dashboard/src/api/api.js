import axios from "axios";

const API = axios.create({
  baseURL: "https://zidio-foresightproject1.onrender.com",
  timeout: 30000,
});

export const getDashboardData = () => API.get("/dashboard");

export const predictSales = (data) =>
  API.post("/predict", data);

export default API;
