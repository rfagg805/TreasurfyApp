import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    //google.api.key = AIzaSyDvj90Xz3fgsv1sQ1eWSsNr0lvXNnvF2Ys
    latitude = 37.279518;
    longitude = -121.867905;
  
    onChoseLocation(event){
      this.latitude = event.coords.lat;
      this.longitude = event.coords.lng;
    }
    
  products;
 
  user;
  loginuser;
  login: Boolean;

  constructor(private _httpService: HttpService,
  private _router: Router) { }
  

  ngOnInit() {
    this.getAll();
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
        })
      })
    }
    else{
      this.login = false;
    }
  }

  getAll(){
    this._httpService.getAll().subscribe(data =>{
      console.log(data['data'])
      this.products = data['data'];
      
    })
  }
  onEdit(id){
    this._router.navigateByUrl(`product/edit/${id}`)
  }
  
  onDelete(id){
    this._httpService.delete(id).subscribe(data =>{
      console.log(id)
    })
    this.getAll()
  }

  logout(){
    this._httpService.logout();
    this._router.navigateByUrl("");
  }

}
