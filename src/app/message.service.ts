import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  //Add message to cahce
  add(message: string) {
    this.messages.push(message);
  }
  //Clear cache
  clear() {
    this.messages = [];
  }
}
