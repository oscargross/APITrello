import axios from "axios";
import {config as dotenv} from 'dotenv'
dotenv()

const api = axios.create({
  baseURL: "https://api--trello.herokuapp.com/",
});

export default api;