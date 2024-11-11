import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const APIfood='http://localhost:8000/api/foods'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {}

  getFood() {
    return this.http.get(`${APIfood}`);
  }
}
