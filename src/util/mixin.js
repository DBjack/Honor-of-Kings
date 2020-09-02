import { getCookie } from "@/util/util";

const mixin = {
    methods: {
        getAuthHeader() {
            return {
                AUTHONZATION: getCookie("AUTHONZATION"),
            };
        },
    },
};

export { mixin };