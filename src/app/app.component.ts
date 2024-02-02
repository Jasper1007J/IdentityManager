import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
;

@Component({
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet,FormsModule,LoginComponent],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  constructor(private routes: Router){}


  title = 'chaintech';
  login=()=>{
  this.routes.navigate(['/login']);
  }
  register=()=>{
    this.routes.navigate(['/register']);
  }
}
