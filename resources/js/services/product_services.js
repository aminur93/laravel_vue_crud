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

export function exportExcel()
{
    return http().get('/api/export-product', {responseType: 'arraybuffer'})
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.xlsx');
            document.body.appendChild(link);
            link.click();
        });

}

export function importProduct(data) {
    return httpFile().post('/api/import-product', data);
}
