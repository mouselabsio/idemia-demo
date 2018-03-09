import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserRecordService {
    public API = '//localhost:8081';
    public GET_USER_RECORDS = this.API + '/idemia/v1/users/records';
    public REFRESH_USER_RECORDS = this.API + '/idemia/v1/users/records?action=refresh';
    
    constructor(private http: HttpClient) {  }

    get(): Observable<any> {
        return this.http.get(this.GET_USER_RECORDS);
    }

    refresh(): Observable<any> {
        return this.http.get(this.REFRESH_USER_RECORDS);
    }

    save(record: any): Observable<any> {
        let result: Observable<Object>;
        result = this.http.post(this.GET_USER_RECORDS, record);
        return result;
    }
}