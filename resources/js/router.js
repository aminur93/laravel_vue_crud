import Vue from 'vue';
import VueRouter from 'vue-router';

//Components
import Welcome from './views/Welcome.vue';


Vue.use(VueRouter);

const routes = [
    
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    
    {
        path: '/category',
        name: 'category',
        component: () => import('./views/Categories.vue')
    }
];

const router = new VueRouter({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;