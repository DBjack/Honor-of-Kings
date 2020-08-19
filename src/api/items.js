import instance from "@/plugins/axios";

const api = {
    add: "rest/items",
    edit: "rest/items",
    fetch: "rest/items",
    del: "rest/items",
};

// 编辑分类
export function edit(paremater) {
    return instance({
        url: api.edit + "/" + paremater.id,
        method: "PUT",
    });
}

// 添加分类
export function add(paremater) {
    return instance({
        url: api.add,
        method: "POST",
        data: paremater,
    });
}

// 删除分类
export function delCategory(paremater) {
    return instance({
        url: api.del + "/" + paremater.id,
        method: "delete",
    });
}
// 查询分类
export function fetch(paremater) {
    return instance({
        url: api.fetch,
        method: "GET",
        params: paremater,
    });
}