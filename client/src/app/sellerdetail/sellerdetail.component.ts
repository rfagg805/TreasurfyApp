import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sellerdetail',
  templateUrl: './sellerdetail.component.html',
  styleUrls: ['./sellerdetail.component.css']
})
export class SellerdetailComponent implements OnInit {

  user;
  login: Boolean;

  sellerId;
  seller;

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
      this.sellerId = params.id;
      console.log(this.sellerId );
      this._httpService.viewOneUser(this.sellerId).subscribe(data => {
        console.log(data);
        this.seller = data['data'][0];
        console.log(this.seller);
      })
    })
  }

  logout(){
    this._httpService.logout();
    this._router.navigateByUrl("");
  }

}
