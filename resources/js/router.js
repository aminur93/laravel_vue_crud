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
                component: () => import('./views/Categories.vue'),
                beforeEnter(to, from, next){
                    if(authService.getUserRole() === 'admin')
                    {
                        next();
                    }else {
                        next('/404');
                    }
                }
            },

            {
                path: 'brand',
                name: 'brand',
                component: () => import('./views/Brand.vue'),
                beforeEnter(to, from, next){
                    if(authService.getUserRole() === 'admin')
                    {
                        next();
                    }else {
                        next('/404');
                    }
                }
            },

            {
                path: 'products',
                name: 'products',
                component: () => import('./views/Products.vue'),
                beforeEnter(to, from, next){
                    if(authService.getUserRole() === 'admin')
                    {
                        next();
                    }else {
                        next('/404');
                    }
                }
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
        path: '/reset-password-request',
        name: 'reset-password-request',
        component: () => import('./views/authentication/ResetPasswordRequest.vue'),
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
        path: '/reset-password/:email',
        name: 'reset-password',
        component: () => import('./views/authentication/ResetPassword.vue'),
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
        path: '*',
        name: '404',
        component: () => import('./views/404.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;