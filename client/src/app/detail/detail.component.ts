import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user;
  login: Boolean;

  product;
  productId;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _getRouteId: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this._httpService.loadToken();
    console.log(this.user);
    if(this.user != undefined){
      this.login = true;
      console.log(this.login);
      this._httpService.decoded(this.user).subscribe(user =>{
        console.log(user);
        this.user = user['id'];
      })
    }
    else{
      this.login = false;
    }
    this._getRouteId.params.subscribe(params => {
      this.productId = params.id;
      console.log(this.productId);
      this._httpService.getOne(this.productId).subscribe(data => {
        console.log(data);
        this.product = data['data'];
        console.log(this.product);
      })
    })
  }


}
