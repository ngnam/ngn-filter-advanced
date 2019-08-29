import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const defaultHeaders: HttpHeaders = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json'
});

@Injectable()
export class HttpRequestService {
    constructor(private http: HttpClient) {}

    post(url: string, data: any, headers?: HttpHeaders): Observable<any> {
        return this.http
            .post(url, data, {
                headers: headers || defaultHeaders
            })
            .pipe(
                map(this.extractData),
                catchError(this.catchError)
            );
    }

    put(url: string, data: any, headers?: HttpHeaders): Observable<any> {
        return this.http
            .put(url, data, {
                headers: headers || defaultHeaders
            })
            .pipe(
                map(this.extractData),
                catchError(this.catchError)
            );
    }

    get(
        url: string,
        params?: HttpParams,
        headers?: HttpHeaders
    ): Observable<any> {
        return this.http
            .get(url, {
                headers: headers || defaultHeaders,
                params
            })
            .pipe(
                map(this.extractData),
                catchError(this.catchError)
            );
    }

    delete(url: string, headers?: HttpHeaders): Observable<any> {
        return this.http
            .delete(url, {
                headers: headers || defaultHeaders
            })
            .pipe(
                map(this.extractData),
                catchError(this.catchError)
            );
    }

    private extractData(res: HttpResponse<object>) {
        const body = res;
        return body || {};
    }

    private catchError(err) {
        console.log(err);
        return of(null);
    }
}
