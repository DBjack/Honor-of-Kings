import axios from "axios";
import { Notification } from "element-ui";
let instance = axios.create({
    baseURL: "http://localhost:3000/admin/api",
    timeout: 50000,
});

//请求拦截器
instance.interceptors.request.use((config) => {
    return config;
});

//响应拦截器
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.log(error.response);
        if (error.response.status === 400) {
            Notification({
                title: "提示",
                message: error.response.data.message,
                duration: 0,
                type: "error",
            });
        }
        return Promise.reject(error);
    }
);

export default instance;