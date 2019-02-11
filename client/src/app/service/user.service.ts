import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = '/api/users/';
  constructor(
    private http: HttpClient
  ) { }

  getApiTableTestData(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
    // return this.http.get<any>('http://localhost:3000/users/');
  }
  // asyncgetAsyncApiTableTestData(): Observable<any> {
  //   return this.http.get<any[]>(this.apiUrl);
  //   // return this.http.get<any>('http://localhost:3000/users/');
  // }
}
