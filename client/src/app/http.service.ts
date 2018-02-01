import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpService {

  authToken;
  user;

  private isUserLoggedIn;
  private username;
  
  constructor(
    private _http: HttpClient,
  ) { 
    this.isUserLoggedIn = false;
  }

  loadToken(){
    const token = localStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  getAll(){
    return this._http.get('/products')
  }

  create(newP){
    return this._http.post('/products',newP)
  }

  getOne(id){
    return this._http.get(`/products/${id}`)
  }

  update(prod){
    return this._http.patch(`/products/${prod._id}`,prod)
  }

  delete(id){
    console.log(id)
    return this._http.delete(`/products/${id}`)
  }

  createUser(user){
    console.log(user)
    return this._http.post('/user',user)
  }

  login(user){
    console.log(user)
    return this._http.patch('/user',user)
  }

  // userLogin(user){
  //   console.log(user);
  //   this.user = user;
  //   console.log(this.user);
  // }

  // getUser(){
  //   return this.user;
  // }

  storeUserData(token, user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  
}
