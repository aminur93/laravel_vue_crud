/**
 * Created by aminur on 9/11/20.
 */

import {http, httpFile} from './http_services';
import jwt from 'jsonwebtoken';
import store from '../store';

export function register(user) {
    return http().post('api/auth/register', user);
}

export function login(user) {
    return http().post('/api/auth/login', user)
        .then(response => {
            if (response.status === 200)
            {
                setToken(response.data);
            }

            return response.data;
        });
}

function setToken(user) {
    const token = jwt.sign({ user: user }, 'laravelvuespa2019');
    localStorage.setItem('laravel-vue-spa-token', token);

    store.dispatch('authenticate', user.user);
}

export function isLoogedIn() {
    const token = localStorage.getItem('laravel-vue-spa-token');
    return token != null;
}


export function logout() {
    http().get('/api/auth/logout');
    localStorage.removeItem('laravel-vue-spa-token');

}

export function getAccessToken() {
    const token = localStorage.getItem('laravel-vue-spa-token');
    if (!token)
    {
        return null;
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}

export function getUserRole()
{
    const token = localStorage.getItem('laravel-vue-spa-token');
    if (!token)
    {
        return null;
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.user.role;
}

export function getProfile() {
    return http().get('/api/auth/profile');
}

export function resetPasswordRequest(user)
{
    return http().post('/api/auth/reset-password-request', user);
}

export function resetPassword(user) {
    return http().post('/api/auth/reset-password', user);
}