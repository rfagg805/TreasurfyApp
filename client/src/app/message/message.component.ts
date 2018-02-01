import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

messages = [{
  text: "Hi, I am interested in buying",
  "self": false
},{
 text: "Hi",
 "self": true
}]
replyMessage = "";

  constructor( private _httpService:HttpService) {   
  }

  ngOnInit() {
  }

  reply(){
    debugger;
    this._httpService.createMessage(this.messages).subscribe(data=>{
      debugger;
      console.log(data);
      if(data['data']){
    this.messages.push({
      "text":this.replyMessage,
      "self":true
    })
  }
  })
    this.replyMessage="";
  }
}


