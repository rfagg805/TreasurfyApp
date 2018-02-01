import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor() {   
  }

  ngOnInit() {
  }

  reply(){
    this.messages.push({
      "text":this.replyMessage,
      "self":true
    })
    this.replyMessage="";
  }
}
