import instance from "@/plugins/axios";

const api = {
    addAdvert: "rest/advert",
    editAdvert: "rest/advert",
    fetchAdvert: "rest/advert",
    fetchSingle: "rest/advert",
    // 查询分类
    del: "rest/advert",
};

// 编辑分类
export function editAdvert(paremater) {
    return instance({
        url: api.editAdvert + "/" + paremater.id,
        method: "PUT",
        data: paremater,
    });
}

// 添加分类
export function addAdvert(paremater) {
    return instance({
        url: api.addAdvert,
        method: "POST",
        data: paremater,
    });
}

// 删除分类
export function delAdvert(paremater) {
    return instance({
        url: api.del + "/" + paremater.id,
        method: "delete",
    });
}
// 查询分类
export function fetchAdvert(paremater) {
    return instance({
        url: api.fetchAdvert,
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