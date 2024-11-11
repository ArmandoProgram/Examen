import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const APIURLchicken = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
const APIjapan = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese'

@Injectable({
  providedIn: 'root'
})
export class ChickenService {

  constructor(private http: HttpClient) { }
  getTopChicken(){
    return this.http.get(`${APIURLchicken}`);
  }

  getChickenByCountry(){
    return this.http.get(`${APIjapan}`);
  }
}
