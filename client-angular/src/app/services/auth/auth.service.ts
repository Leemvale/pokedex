import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthResult} from "../../domain/AuthResult";
import { HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";


@Injectable()
export class AuthService {

  registerRequest = 'http://localhost:5000/api/auth/register';
  loginRequest = 'http://localhost:5000/api/auth/login';
  checkTokenRequest = 'http://localhost:5000/api/auth/check-token';

  isAuth: boolean = false;

  constructor(private http: HttpClient,
              private router: Router) { }

  public register (name, email, password) {
    this.http.post<AuthResult>(this.registerRequest, {name, email, password})
      .subscribe(res => {
        this.setToken(res.token);
        this.router.navigate(['/all-pokemons'])
      });
  }

  public login (email, password) {
    this.http.post<AuthResult>(this.loginRequest, {email, password})
      .subscribe(res => {
        this.setToken(res.token);
        this.router.navigate(['/all-pokemons'])
      }, err => console.log(err));
  }

  public checkAuth() {
    return this.isAuth;
  }

  public logOut() {
    this.removeToken();
    this.isAuth = false;
  }

  private setToken(token) {
    this.isAuth = true;
    localStorage.setItem('token', token);
  }

  private getToken() {
    return localStorage.getItem('token');
  }

  private removeToken() {
    localStorage.removeItem('token');
  }


  public checkToken() {
    this.http.post(this.checkTokenRequest, {}, this.getOptions()).subscribe(
      res => this.isAuth = true, error =>  this.isAuth = false
    )
  }

  public setOptions() {

  }

  public getOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'access-token': this.getToken()
      })}
  }

  public getUserId() {
    const payload =  this.getToken().split('.')[1];
    return JSON.parse(atob(payload)).id;
  }
}
