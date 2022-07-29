import {Filter}  from '../../interfaces/filter.interface'

export function filterQuery(params:Filter) {
    var query = '';
    for(const [key, value] of  Object.entries(params)) {
        if (value != null && value != undefined && value != '')
            query += `${key}=${encodeURIComponent(value)}&`;
    }
    query = query.substring(0, query.length - 1);
    return query;
} 