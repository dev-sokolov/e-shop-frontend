import axios from "axios";

const backendInstance = axios.create({
    baseURL: "http://localhost:4000/api"
})

export default backendInstance;