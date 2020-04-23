import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message: string = "messgaes component init message";

  constructor(private _messagesService: MessagesService) { }

  ngOnInit() {
    this._messagesService.message$.subscribe(message => {
      this.message = message;
    })
  }


}
