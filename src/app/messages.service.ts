import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private _messagesSource = new Subject<string>();
  message$ = this._messagesSource.asObservable();


  constructor() { }

  setMessage(message: string): void
  {
    this._messagesSource.next(message);
  }

  clearMessage(): void
  {
    this._messagesSource.next("");
  }

}
