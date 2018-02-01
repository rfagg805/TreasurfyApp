import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products;
 

  constructor(private _httpService: HttpService,
  private _router: Router) { }
  

  ngOnInit() {
    this.getAll();
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

}
