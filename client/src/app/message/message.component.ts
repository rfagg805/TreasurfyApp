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

  userId :String;
  login: Boolean;
  message: String;
  messages= [];
  secretCode: string;


  constructor( 
    private _httpService:HttpService, 
    private chatService: ChatService) 
    {  
    this.secretCode = 'DONT TELL'; 
  }

  sendMessage() {
    // get 
    const newMessage = {
      userId: this.userId,
      text: this.message
    }
    this.chatService.sendMessage(newMessage);
    this.message = '';
  }

  ngOnInit() {
    this.userId = this._httpService.loadToken();
    console.log(this.userId);
    if(this.userId != undefined){
      this.login = true;
      console.log(this.login);
      this._httpService.decoded(this.userId).subscribe(user =>{
        console.log(user);
  

        this.userId = user['id'];
      })
    }


    this.chatService
    .getMessages()
    .subscribe((message) => {
      let newMessage = message;
      newMessage['class'] = this.userId == message.userId ? "me" : "friend";
      this.messages.push(message);
    });
  }

  
}


