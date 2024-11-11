import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const APIURL = 'http://localhost:8000/api/auth';
const APIURL1 = 'http://localhost:8000/api/foods';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(body: any) {
    return this.http.post(`${APIURL}/login`, body);
  }

  getFoods(){
    return this.http.get(`${APIURL1}`)
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return null;
  }
}
