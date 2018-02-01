import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ValidateEqualDirective } from '../validate-equal.directive';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
})
export class CreateuserComponent implements OnInit {

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
  }

  createUser(){
    console.log(this.user);
    this._httpService.createUser(this.user).subscribe(data=>{
      console.log(data);
      console.log(data['err'].code);
      if(data['data']){
        this._httpService.setUserLoggedIn();
        this._router.navigateByUrl('');
      }
      else if(data['err'].code == 11000){
        this.errors = "Email already exist"
      }
    })
  }
}
