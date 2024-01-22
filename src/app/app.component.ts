import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor(){
    //setTimeout(() => {
    //  this.title = "Changed title";
    //}, 2000);
  }
}