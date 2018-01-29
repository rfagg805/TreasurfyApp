import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

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

  
}
