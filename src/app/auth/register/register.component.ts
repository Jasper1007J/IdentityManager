import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;

  constructor(private authService: AuthService,private router: Router) {
    this.username = '';
    this.email = '';
    this.password = '';
  }

  register() {
    const registered = this.authService.register(this.username, this.email, this.password);
    if (!registered) {
      // Handle registration failure
      this.router.navigate(['/account-info'])
    }
    else{
      alert('enter valid inputs')
    }
  }
}
