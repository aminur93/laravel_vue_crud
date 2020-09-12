import Vue from 'vue';
import VueRouter from 'vue-router';
import * as authService from './services/auth_services';

//Components
import Home from './views/Home.vue';


Vue.use(VueRouter);

const routes = [

    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import ('./views/Dashboard.vue')
            },

            {
                path: 'category',
                name: 'category',
                component: () => import('./views/Categories.vue')
            },

            {
                path: 'products',
                name: 'products',
                component: () => import('./views/Products.vue')
            },
        ],

        beforeEnter(to, from, next){
            if(!authService.isLoogedIn())
            {
                next('/login');
            }else {
                next();
            }
        }
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('./views/authentication/Register.vue')
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentication/Login.vue'),
        beforeEnter(to, from, next){
            if(!authService.isLoogedIn())
            {
                next();
            }else {
                next('/home');
            }
        }
    },

    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('./views/authentication/ResetPassword.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;