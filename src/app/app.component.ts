import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  likes: number;
  dislikes: number;

  submit() {
    console.log("Form submitted")
  }
  upvote() {
    this.likes+=1;
  }
  downvote() {
    this.dislikes+=1;
  }
}
