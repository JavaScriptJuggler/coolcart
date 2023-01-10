import { createWebHistory, createRouter } from "vue-router";
/* imports of components */

// import ExampleComponent from './components/ExampleComponent.vue';
import home from './pages/frontend/home.vue'
import shop from './pages/frontend/shop.vue'
import dashboard from './pages/admin/dashboard.vue'
/* routes */

const routes = [

    /* frontend routes */
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {
            isFrontendNavBarVisible: true,
        }
    },
    {
        path: '/store',
        name: 'store',
        component: shop,
        meta: {
            isFrontendNavBarVisible: true,
        }
    },

    /* admin routes */
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
        meta: {
            isAdminNavBarVisible: true,
            needAuth: true,
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/* protect route */
router.beforeEach((to, from) => {
    if (to.meta.needAuth) {
        router.push('/')
    }
})

export default router;
