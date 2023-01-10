import { createWebHistory, createRouter } from "vue-router";
/* imports of components */

// import ExampleComponent from './components/ExampleComponent.vue';
import home from './pages/frontend/home.vue'
import shop from './pages/frontend/shop.vue'
import login from './pages/auth/login.vue'
import register from './pages/auth/register.vue'
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
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            isFrontendNavBarVisible: true,
        }
    },
    {
        path: '/register',
        name: 'register',
        component: register,
        meta: {
            isFrontendNavBarVisible: true,
        }
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
