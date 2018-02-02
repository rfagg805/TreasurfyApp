import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

import { NgModule } from '@angular/core';

import { window } from 'rxjs/operators/window';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //google.api.key = AIzaSyDvj90Xz3fgsv1sQ1eWSsNr0lvXNnvF2Ys
  latitude = 37.279518;
  longitude = -121.867905;

  onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }


  user;
  login: Boolean;

  constructor(
    private _httpService:HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.user = this._httpService.loadToken();
    if(this.user != undefined){
      this.login = true;
      console.log(this.login);
    }
    else{
      this.login = false;
    }
  }

  logout(){
    this._httpService.logout();
  }

  

}
