import instance from "@/plugins/axios";

const api = {
    login: "/login",
};

// 编辑分类
export function login(paremater) {
    return instance({
        url: api.login,
        method: "Post",
        data: paremater,
    });
}