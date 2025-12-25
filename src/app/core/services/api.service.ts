import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url : string = 'https://dummyjson.com/';

  getUsers() : Observable<any> {
    return this.http.get(this.url + 'users');
  }




}
