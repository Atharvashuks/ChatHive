import axios from "axios";
import { HOST } from "../src/constants";

export const clientAPI = axios.create({ baseURL: HOST });
