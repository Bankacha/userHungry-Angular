import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL, getAuthHeaders } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get(`${baseURL}/restaurants`, {headers: getAuthHeaders()})
  }
}
