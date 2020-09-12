/**
 * Created by aminur on 9/12/20.
 */

import {http, httpFile} from './http_services';

export function loadCategories() {
    return http().get('/api/get-categories');
}

export function createProducts(data){
    return httpFile().post('/api/product',data);
}

export function loadProducts() {
    return http().get('/api/product');
}

export function deleteProduct(id) {
    return http().delete(`/api/product/${id}`);
}

export function updateProduct(id, data) {
    return httpFile().post(`/api/product/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`/api/product?page=${nextPage}`);
}