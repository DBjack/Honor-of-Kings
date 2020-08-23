import instance from "@/plugins/axios";

const api = {
    addCategories: "rest/categories",
    editCategories: "rest/categories",
    fetchCategories: "rest/categories",
    delCategories: "rest/categories",
};

// 编辑分类
export function editCategories(paremater) {
    return instance({
        url: api.editCategories + "/" + paremater.id,
        method: "PUT",
    });
}

// 添加分类
export function addCategories(paremater) {
    return instance({
        url: api.addCategories,
        method: "POST",
        data: paremater,
    });
}

// 删除分类
export function delCategories(paremater) {
    return instance({
        url: api.delCategories + "/" + paremater.id,
        method: "delete",
    });
}
// 查询分类
export function fetchCategories(paremater) {
    return instance({
        url: api.fetchCategories,
        method: "GET",
        params: paremater,
    });
}