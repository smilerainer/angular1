import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

      constructor(private router: Router) {}
  onSubmit() {
    if (this.username === 'admin' && this.password === '1234') {
          this.router.navigate(['/mainpage']);
    } else {
      alert('Please enter both username and password.');
    }
  }
}