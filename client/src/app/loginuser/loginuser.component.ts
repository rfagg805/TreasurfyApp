import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ValidateEqualDirective } from '../validate-equal.directive';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  emailpattern = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$"
  email_errors;
  pw_errors;
  user = {
    email:'',
    password:''
  }
  
  constructor(
    private _httpService:HttpService,
    private _router:Router
  ) { }

  ngOnInit() {
  }

  login(){
    this._httpService.login(this.user).subscribe(data =>{
      console.log(data);
      if(data['data']== false){
        if(data['type'] == 'email'){
          this.email_errors = data['message']; 
        }

        else if(data['type']== 'pw'){
          // console.log(data['message']);
          this.pw_errors = data['message']
        } 
      }
      else{
        console.log(data['data']);
        this._httpService.setUserLoggedIn();
        this._httpService.storeUserData(data['token'],data['user'])
        this._router.navigateByUrl('');
      }
    })
  }

}
