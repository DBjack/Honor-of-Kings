import axios from "axios";
import { Notification } from "element-ui";
import { getCookie } from "@/util/util";

let baseurl = process.env.VUE_APP_BASEURL;
let locationUrl = process.env.VUE_APP_LOCATIONURL;

let instance = axios.create({
    baseURL: `${baseurl}/admin/api`,
    timeout: 50000,
    withCredentials: true,
});

let token = getCookie("AUTHONZATION");
console.log(process.env.VUE_APP_BASEURL, 1123344);

//请求拦截器
instance.interceptors.request.use((config) => {
    if (token) {
        config.headers["AUTHONZATION"] = token;
    }
    return config;
});

//响应拦截器
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response.status === 422) {
            Notification({
                title: "提示",
                message: error.response.data.message,
                duration: 1500,
                type: "error",
            });
            location.href = `${locationUrl}/login`;
        }
        return Promise.reject(error);
    }
);

export default instance;