import instance from "@/plugins/axios";

const api = {
    addItems: "rest/items",
    editItems: "rest/items",
    fetchItems: "rest/items",
    del: "rest/items",
};

// 编辑分类
export function editItems(paremater) {
    return instance({
        url: api.editItems + "/" + paremater.id,
        method: "PUT",
    });
}

// 添加分类
export function addItems(paremater) {
    return instance({
        url: api.addItems,
        method: "POST",
        data: paremater,
    });
}

// 删除分类
export function delItems(paremater) {
    return instance({
        url: api.del + "/" + paremater.id,
        method: "delete",
    });
}
// 查询分类
export function fetchItems(paremater) {
    return instance({
        url: api.fetchItems,
        method: "GET",
        params: paremater,
    });
}