import instance from "@/plugins/axios";

const api = {
    addAdminUser: "rest/adminUser",
    editAdminUser: "rest/adminUser",
    fetchAdminUser: "rest/adminUser",
    fetchSingle: "rest/adminUser",
    // 查询分类
    del: "rest/adminUser",
};

// 编辑分类
export function editAdminUser(paremater) {
    return instance({
        url: api.editAdminUser + "/" + paremater.id,
        method: "PUT",
        data: paremater,
    });
}

// 添加分类
export function addAdminUser(paremater) {
    return instance({
        url: api.addAdminUser,
        method: "POST",
        data: paremater,
    });
}

// 删除分类
export function delAdminUser(paremater) {
    return instance({
        url: api.del + "/" + paremater.id,
        method: "delete",
    });
}
// 查询分类
export function fetchAdminUser(paremater) {
    return instance({
        url: api.fetchAdminUser,
        method: "GET",
        params: paremater,
    });
}

// 查询分类
export function fetchSingle(paremater) {
    return instance({
        url: api.fetchSingle + "/" + paremater.id,
        method: "GET",
        params: paremater,
    });
}