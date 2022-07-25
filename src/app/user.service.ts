import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private baseUrl = 'https://localhost:44385/api/Users';
 private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

  constructor(private http: HttpClient) { }

   createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user,this.httpOptions);
  }
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
