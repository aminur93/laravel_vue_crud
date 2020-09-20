/**
 * Created by aminur on 9/7/20.
 */

import {http, httpFile} from './http_services';

export function createCategories(data){
    return httpFile().post('/api/category',data);
}

export function loadCategories() {
    return http().get('/api/category');
}

export function deleteCategory(id) {
    return http().delete(`/api/category/${id}`);
}

export function updateCategory(id, data) {
    return httpFile().post(`/api/category/${id}`, data);
}
