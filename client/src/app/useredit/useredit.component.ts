import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  updateuser;
  loginuser;
  login: Boolean;

  emailpattern = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$"
  // passwordpattern = "/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{4,20}$/"

  user = {
    name:'',
    email:'',
    password:'',
    cpassword:'',
    zipcode:null,
    picture:''
  }

  errors;

  constructor(
    private _httpService:HttpService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.updateuser = this._httpService.loadToken();
    console.log(this.user);
    if(this.updateuser != undefined){
      this.login = true;
      console.log(this.login);
      this._httpService.decoded(this.updateuser).subscribe(user =>{
        console.log(user);
        this.loginuser = user['id'];
        this._httpService.viewOneUser(this.loginuser).subscribe(user=>{
          this.user = user['data'][0];
          console.log(this.user);
        })
      })
    }
    else{
      this.login = false;
    }
  }

  updateUser(){
    console.log(this.user);
    this._httpService.updateUser(this.user).subscribe(data=>{
      console.log(data);
      if(data['data']){
        this._httpService.setUserLoggedIn();
        this._httpService.storeUserData(data['token'],data['user'])
        this._router.navigateByUrl('productslist');
      }
      else if(data['err'].code == 11000){
        this.errors = "Email already exist"
      }
    })
  }

}
