import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  errors;
  products;
  product = {
    id:"",
    title: "",
    price: 0,
    images: "",
    description: "",
    condition: "",
    catalog: "",
    url: "",
    _user:"",
  }
  conditions = ["New", "Refurbished", "Used", "Like New", "Partially not working"]
  category = ["Food & Beverages", "Clothing, Shoes & Accessories", "Business & Industrial", "Cameras & Photo", "Cell Phones & Accessories", "Computers, Tablets & Networking", "Electronics", "Home & Garden", "Musical Instruments & Gear", "Collectibles", "Pet Supplies", "Crafts", "Dolls & Bears", "Toys & Hobbies", "Books", "DVDs & Movies", "Music", "Video Games"]

  constructor(private _httpService:HttpService,
  private _router:Router, private _activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedroute.params.subscribe(data=>{
      console.log(data);
      this.product.id = data['id'];
      this._httpService.getOne(this.product.id).subscribe(data => {
        console.log(data);
        this.product = data['data'];
        console.log(this.product)
      })
    })
    this.product._user = this._httpService.loadToken();
    //This is actaully user id
    console.log(this.product._user); 
  }

  updateProduct(){
    console.log(this.product);
    this._httpService.update(this.product).subscribe(data => {
      this._router.navigateByUrl('productslist')
    })
  }

}
