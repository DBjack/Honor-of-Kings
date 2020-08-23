import instance from "@/plugins/axios";

const api = {
    addArticle: "rest/article",
    editArticle: "rest/article",
    fetchArticle: "rest/article",
    fetchSingle: "rest/article",
    // 查询分类
    del: "rest/article",
};

// 编辑分类
export function editArticle(paremater) {
    return instance({
        url: api.editArticle + "/" + paremater.id,
        method: "PUT",
        data: paremater,
    });
}

// 添加分类
export function addArticle(paremater) {
    return instance({
        url: api.addArticle,
        method: "POST",
        data: paremater,
    });
}

// 删除分类
export function delArticle(paremater) {
    return instance({
        url: api.del + "/" + paremater.id,
        method: "delete",
    });
}
// 查询分类
export function fetchArticle(paremater) {
    return instance({
        url: api.fetchArticle,
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