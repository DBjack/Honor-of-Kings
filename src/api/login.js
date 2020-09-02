import instance from "@/plugins/axios";

const api = {
    login: "/login",
    register: "rest/adminUser",
};

// 编辑分类
export function login(paremater) {
    return instance({
        url: api.login,
        method: "Post",
        data: paremater,
    });
}
// 注册
export function register(paremater) {
    return instance({
        url: api.register,
        method: "Post",
        data: paremater,
    });
}