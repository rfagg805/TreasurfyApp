import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  user;

  constructor(private _http: HttpClient) { }

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

  findOneUser(user){
    console.log(user)
    return this._http.patch('/user',user)
  }

  userLogin(user){
    console.log(user);
    this.user = user;
    console.log(this.user);
    return this.user
  }
  
}
