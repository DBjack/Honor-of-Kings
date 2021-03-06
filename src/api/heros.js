import instance from "@/plugins/axios";

const api = {
    addHeros: "rest/heros",
    editHeros: "rest/heros",
    delHeros: "rest/heros",
    fetchHeros: "rest/heros",
    fetchSingleHeros: "rest/heros",
};

// 编辑分类
export function editHeros(paremater) {
    return instance({
        url: api.editHeros + "/" + paremater.id,
        method: "PUT",
        data: paremater,
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
// 查询单个详情
export function fetchSingleHeros(paremater) {
    return instance({
        url: api.fetchSingleHeros + "/" + paremater.id,
        method: "GET",
        params: paremater,
    });
}