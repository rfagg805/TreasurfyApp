import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user;
  loginuser;
  login: Boolean;

  constructor(private _httpService: HttpService,
  private _router: Router) { }

  ngOnInit() {
    this.user = this._httpService.loadToken();
    console.log(this.user);
    if(this.user != undefined){
      this.login = true;
      console.log(this.login);
      this._httpService.decoded(this.user).subscribe(user =>{
        console.log(user);
        this.user = user['id'];
        this._httpService.viewOneUser(this.user).subscribe(user=>{
          this.loginuser = user['data'][0];
          console.log(this.loginuser);
        })
      })
    }
    else{
      this.login = false;
    }
  }

}
