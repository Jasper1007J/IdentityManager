import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router : Router) {

  }

  login() {
    const loggedIn = this.authService.login(this.username, this.password);
    if (!loggedIn) {
      // Handle login failure
      alert('Invalid login! Please check your username and password.');
    }
     else {
      this.router.navigate(['/account-info']);
      console.log(this.username);
      console.log(this.password);

    }
  }

  success(){

  }
}
