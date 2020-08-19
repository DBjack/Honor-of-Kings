import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/home",
    },
    { path: "/home", component: () =>
            import ("@/views/Home") },
    {
        path: "/categories",
        component: () =>
            import ("@/views/Home"),
        children: [{
                path: "edit",
                component: () =>
                    import ("@/components/categories/Edit"),
            },
            {
                path: "edit/:id",
                component: () =>
                    import ("@/components/categories/Edit"),
                props: true,
            },
            {
                path: "list",
                component: () =>
                    import ("@/components/categories/List"),
            },
        ],
    },
    {
        path: "/items",
        component: () =>
            import ("@/views/Home"),
        children: [{
                path: "edit",
                component: () =>
                    import ("@/components/items/Edit"),
            },
            {
                path: "edit/:id",
                component: () =>
                    import ("@/components/items/Edit"),
                props: true,
            },
            {
                path: "list",
                component: () =>
                    import ("@/components/items/List"),
            },
        ],
    },
    {
        path: "/heros",
        component: () =>
            import ("@/views/Home"),
        children: [{
                path: "edit",
                component: () =>
                    import ("@/components/heros/Edit"),
            },
            {
                path: "edit/:id",
                component: () =>
                    import ("@/components/heros/Edit"),
                props: true,
            },
            {
                path: "list",
                component: () =>
                    import ("@/components/heros/List"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;