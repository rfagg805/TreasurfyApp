import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  quote = {
    content: "",
    author: "",
    rating: 0,
  }
  datas;
  errors;
  rating = 0;

  constructor(private _http : HttpService){
  }

  ngOnInit(){
    this.getAll();
  }

  onSubmit(){
    console.log(this.quote);
    this._http.create(this.quote).subscribe(data=>{
      console.log(data);
      if(data['err']){
        this.errors = data['err']
        console.log(this.errors);
      }
    })
    this.quote = {
      content: "",
      author: "",
      rating: 0,
    }
    this.getAll()
  }

  getAll(){
    this._http.getAll().subscribe(data=>{
      console.log(data);
      this.datas = data['data'];
    })
  }

  voteUp(q){
    q.rating += 1;
    this._http.update(q).subscribe(data => {
      console.log(data);
    })
    this.getAll()
  }

  voteDown(q){
    q.rating -= 1;
    this._http.update(q).subscribe(data => {
      console.log(data);
    })
    this.getAll()
  }

  delete(id){
    this._http.delete(id).subscribe(data=>{
      console.log(data);
      this.getAll()
    })
  }
}
