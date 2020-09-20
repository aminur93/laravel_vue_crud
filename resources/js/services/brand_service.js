import {http, httpFile} from './http_services';

export function loadBrand() {
    return http().get('/api/brand');
}

export function createBrand(data) {
    return http().post('/api/brand/store', data);
}
