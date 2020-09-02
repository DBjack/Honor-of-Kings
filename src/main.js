import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "element-ui/lib/theme-chalk/index.css";
import Axios from "./plugins/axios";
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

// Vue.mixin({
//     methods: {
//         getAuthHeader() {
//             return {
//                 AUTHONZATION: getCookie("AUTHONZATION"),
//             };
//         },
//     },
// });

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");