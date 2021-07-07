import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL, getAuthHeaders } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private http: HttpClient) { }

  getPolls() {
    return this.http.get(`${baseURL}/polls`, { headers: getAuthHeaders() })
  }
}
