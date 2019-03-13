import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {

    configUrl = 'assets/cofnfig.json'

    constructor(private http: HttpClient) { }

    getAllPost(): Observable<Object> {
        return this.http.get(this.configUrl); //'https://jsonplacehkolder.typicode.com/todos/1'
    }

}