import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
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
    url: ""
  }
  conditions = ["New", "Refurbished", "Used", "Like New", "Partially not working"]
  category = ["Food & Beverages", "Clothing, Shoes & Accessories", "Business & Industrial", "Cameras & Photo", "Cell Phones & Accessories", "Computers, Tablets & Networking", "Electronics", "Home & Garden", "Musical Instruments & Gear", "Collectibles", "Pet Supplies", "Crafts", "Dolls & Bears", "Toys & Hobbies", "Books", "DVDs & Movies", "Music", "Video Games"]
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.product.id = this._httpService.loadToken();
    //This is actaully user id
    console.log(this.product.id);
  }

  createProduct() {
    console.log(this.product);
    this._httpService.create(this.product).subscribe(data => {
      console.log(data);
      if (data['err']) {
        this.errors = data['err'];
        console.log(this.errors)
      } else {
        this._router.navigateByUrl('productslist')
      }
    })
  }
}
