import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL, storageTokenKey } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    this.http.post(`${baseURL}/auth`, {
      "username": username,
      "password": password
    }).subscribe((data: any) => localStorage.setItem(`${storageTokenKey}`, `${data.access_token}`))
  }
}
