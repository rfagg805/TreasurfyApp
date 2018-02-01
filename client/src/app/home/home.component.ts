import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators/window';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
