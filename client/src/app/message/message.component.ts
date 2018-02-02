import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import {ChatService} from '../chat.service';

import * as moment from 'moment';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string;
  messages: string[] = [];
  secretCode: string;


  constructor( private _httpService:HttpService, private chatService: ChatService) {  
    this.secretCode = 'DONT TELL'; 
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatService
    .getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  
}


