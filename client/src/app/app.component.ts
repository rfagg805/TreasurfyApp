import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user;

  quote = {
    content: "",
    author: "",
    rating: 0,
  }
  datas;
  errors;
  rating = 0;

  constructor(private _httpService : HttpService){
  }

  ngOnInit(){
    
  }

}
