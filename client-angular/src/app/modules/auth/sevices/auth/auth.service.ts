import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { AuthResult } from '../../../../domain/AuthResult';

@Injectable()
export class AuthService {

  registerRequest = 'http://localhost:5000/api/auth/register';
  loginRequest = 'http://localhost:5000/api/auth/login';
  checkTokenRequest = 'http://localhost:5000/api/auth/check-token';

  isAuth: boolean = false;

  constructor(private http: HttpClient) { }

  public register (name, email, password) {
    return this.http.post<AuthResult>(this.registerRequest, {name, email, password})
  }

  public login (email, password) {
    return this.http.post<AuthResult>(this.loginRequest, {email, password})
  }

  public checkAuth() {
    return this.isAuth;
  }

  public logOut() {
    this.removeToken();
    this.isAuth = false;
  }

  public setToken(token) {
    this.isAuth = true;
    localStorage.setItem('token', token);
  }

  private getToken() {
    return localStorage.getItem('token');
  }

  private removeToken() {
    localStorage.removeItem('token');
  }

  public getOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'access-token': this.getToken()
      })}
  }

  public checkToken() {
    return this.http.post(this.checkTokenRequest, {}, this.getOptions())
      .toPromise()
      .then(() => this.isAuth = true)
      .catch(error => {
        this.isAuth = false;
      });
  }
}
