import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username: string = '';
  password: string = '';

  onSubmit(e: Event) {
    e.preventDefault();
    console.log('Logging in with', {
      username: this.username,
      password: this.password,
    });
  }
}
