import instance from "@/plugins/axios";

const api = {
    addHeros: "rest/heros",
    editHeros: "rest/heros",
    fetchHeros: "rest/heros",
    delHeros: "rest/heros",
};

// 编辑分类
export function editHeros(paremater) {
    return instance({
        url: api.editHeros + "/" + paremater.id,
        method: "PUT",
    });
}

// 添加分类
export function addHeros(paremater) {
    return instance({
        url: api.addHeros,
        method: "POST",
        data: paremater,
    });
}

// 删除分类
export function delHeros(paremater) {
    return instance({
        url: api.del + "/" + paremater.id,
        method: "delete",
    });
}
// 查询分类
export function fetchHeros(paremater) {
    return instance({
        url: api.fetchHeros,
        method: "GET",
        params: paremater,
    });
}