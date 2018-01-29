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
  product ={
    id: "",
    title: "",
    price: 0,
    image:""
  };
  constructor(private _httpService:HttpService,
  private _router:Router, private _activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedroute.params.subscribe(data=>{
      console.log(data);
      this.product.id = data['id'];
      this._httpService.getOne(this.product.id).subscribe(data => {
        console.log(data);
        this.product = data['data'][0];
        console.log(this.product)
      })
    })

    
  }
  //taking id and calling service for one product (data) 

  onUpdate(id){
    this._httpService.update(this.product).subscribe(data => {
      this._router.navigateByUrl('product')
    })
  }

}
