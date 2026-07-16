import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production"
    ? "" // production -> same origin
    : "http://localhost:5060", // development backend port
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
