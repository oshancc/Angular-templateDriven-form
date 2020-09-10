import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(data: any) {
    console.warn(data);
  }

  userModel = new User("", null, "", "default", "", true);

  topics = ["Java", "Cpp", "Python", "Angular", "C"]

  topicError = true;

  validateTopic(val: string) {
    if (val == "default") {
      this.topicError = true;
    } else {
      this.topicError = false;
    }
  }

}
