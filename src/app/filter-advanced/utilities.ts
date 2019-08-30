import { HttpParams } from '@angular/common/http';

export function isNotEmpty(value: any): boolean {
    return value !== undefined && value !== null && value !== '';
}

export function mapToObjectParam(params: Object) {
    let result = {};
    for (const property in params) {
        if (params.hasOwnProperty(property) && isNotEmpty(params[property])) {
            result[property] = params[property];
        }
    }
    return result;
}

export function mapToStringParam(params: Object) {
    let httpParams: HttpParams = new HttpParams();
    for (const property in params) {
        if (params.hasOwnProperty(property) && isNotEmpty(params[property])) {
            httpParams = httpParams.set(property, params[property]);
        }
    }
    return httpParams.toString();
}
