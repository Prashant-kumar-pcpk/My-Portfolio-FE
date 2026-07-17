import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production"
    ? "" // production -> same origin
    : "https://my-portfolio-be-27dm.onrender.com/", // development backend port
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
