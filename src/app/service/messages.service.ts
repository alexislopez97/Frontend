import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];
  constructor() { }

  add(messages: string){
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    this.messages.push(`${time} - ${messages}`);
  }

  clear(){
    this.messages = [];
  }
}
