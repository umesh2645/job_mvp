import axios from "axios";
console.log(process.env);
const httpModule = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default httpModule;
