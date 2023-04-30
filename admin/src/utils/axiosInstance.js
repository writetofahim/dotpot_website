import axios from "axios";

const token = localStorage.getItem("accessToken");
const instance = axios.create({
  baseURL: import.meta.env.REACT_APP_SERVER_PATH,
  headers: { Authorization: `Bearer ${JSON.parse(token)}` },
});

export default instance;
