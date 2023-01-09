import { createWebHistory, createRouter } from "vue-router";
/* imports of components */

// import ExampleComponent from './components/ExampleComponent.vue';
import home from './pages/home.vue'
import shop from './pages/shop.vue'
/* routes */

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/store',
        name: 'store',
        component: shop
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
