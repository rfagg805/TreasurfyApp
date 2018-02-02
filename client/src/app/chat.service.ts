import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  private url = 'http://localhost:8000';
  private socket;

  constructor() { 
    this.socket = io(this.url);
  }

  sendMessage(message) {
    this.socket.emit('new-message', message);
}

   getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
}

}
