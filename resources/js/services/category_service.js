/**
 * Created by aminur on 9/7/20.
 */

import {http, httpFile} from './http_services';

export function createCategories(data){
    return httpFile().post('/api/category',data);
}
