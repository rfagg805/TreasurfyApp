import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ChatService } from './chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  constructor(private _httpService : HttpService, chatService: ChatService){
  }

  ngOnInit(){
    
  }

}
