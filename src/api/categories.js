import instance from "@/plugins/axios";

const api = {
    addCategoriesCategories: "rest/categories",
    editCategoriesCategories: "rest/categories",
    fetchCategoriesCategories: "rest/categories",
    delCategories: "rest/categories",
};

// 编辑分类
export function editCategories(paremater) {
    return instance({
        url: api.editCategoriesCategories + "/" + paremater.id,
        method: "PUT",
    });
}

// 添加分类
export function addCategories(paremater) {
    return instance({
        url: api.addCategoriesCategories,
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
        url: api.fetchCategoriesCategories,
        method: "GET",
        params: paremater,
    });
}