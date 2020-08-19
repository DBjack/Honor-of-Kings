import axios from "axios";

let instance = axios.create({
    baseURL: "http://localhost:3000/admin/api",
    timeout: 50000,
});

//请求拦截器
instance.interceptors.request.use((config) => {
    return config;
});

//响应拦截器
instance.interceptors.response.use((response) => {
    console.log(response.data, 11);
    return response.data;
});
export default instance;