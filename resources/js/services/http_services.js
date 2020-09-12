import store from '../store';
import axios from 'axios';
import * as authServices from './auth_services';

export function http(){
    return axios.create({
        baseUrl: store.state.apiURL,
        headers: {
            Authorization: 'Bearer '+authServices.getAccessToken()
        }
    });
}

export function httpFile(){
    return axios.create({
        baseUrl: store.state.apiURL,
        headers: {
            Authorization: 'Bearer '+authServices.getAccessToken(),
            'Content-Type' : 'multipart/form-data'
        }
    });
}