import axios from "axios";
import { baseURL } from "../Utils";

const axiosLogin = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

export default axiosLogin;
