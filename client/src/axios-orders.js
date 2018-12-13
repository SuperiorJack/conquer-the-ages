import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-cba9c.firebaseio.com/"
});

export default instance;
