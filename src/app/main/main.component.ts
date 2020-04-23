import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() user;
  
  constructor() { 
    console.log("'constructor'", document.readyState, new Date(), new Date().getMilliseconds(), document.querySelector("#target"));

    document.addEventListener('DOMContentLoaded', (event) => {
      console.log("'DOMContentLoaded'", document.readyState, new Date(), new Date().getMilliseconds(), document.querySelector("#target"));
    });
  }

  ngOnInit() {
    console.log("'init'", document.readyState, new Date(), new Date().getMilliseconds(), document.querySelector("#target"));
    this.createScript();
    console.log("'after createScript()'", new Date(), new Date().getMilliseconds(), document.querySelector("#target"));
  }

  createScript()
  {
    let head = document.getElementsByTagName("head")[0];
    let jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-3.4.1.min.js";

    let script = document.createElement("script");
    script.src = "./assets/test.js";

    head.appendChild(jquery);
    head.appendChild(script);
  }  
}

// test for commit 3
