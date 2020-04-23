import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(title: Title){
    title.setTitle("My Super Page Title");
  }

  me = { name: "Mike", age: 34 };
  
}
