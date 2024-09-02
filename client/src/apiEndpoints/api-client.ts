import axios from "axios";
import { HOST } from "@/constants";

console.log("asasasass", HOST);

export const clientAPI = axios.create({ baseURL: "http://localhost:3000" });
