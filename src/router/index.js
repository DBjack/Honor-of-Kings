import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: () =>
            import ("@/views/Home"),
    },
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
    {
        path: "/article",
        component: () =>
            import ("@/views/Home"),
        children: [{
                path: "edit",
                component: () =>
                    import ("@/components/article/Edit"),
            },
            {
                path: "edit/:id",
                component: () =>
                    import ("@/components/article/Edit"),
                props: true,
            },
            {
                path: "list",
                component: () =>
                    import ("@/components/article/List"),
            },
        ],
    },
    {
        path: "/advert",
        component: () =>
            import ("@/views/Home"),
        children: [{
                path: "edit",
                component: () =>
                    import ("@/components/advert/Edit"),
            },
            {
                path: "edit/:id",
                component: () =>
                    import ("@/components/advert/Edit"),
                props: true,
            },
            {
                path: "list",
                component: () =>
                    import ("@/components/advert/List"),
            },
        ],
    },
    {
        path: "/adminUser",
        component: () =>
            import ("@/views/Home"),
        children: [{
                path: "edit",
                component: () =>
                    import ("@/components/adminUser/Edit"),
            },
            {
                path: "edit/:id",
                component: () =>
                    import ("@/components/adminUser/Edit"),
                props: true,
            },
            {
                path: "list",
                component: () =>
                    import ("@/components/adminUser/List"),
            },
        ],
    },
    {
        path: "/login",
        component: () =>
            import ("@/views/Login"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;