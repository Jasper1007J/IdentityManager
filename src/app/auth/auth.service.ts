import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    username = 'admin';
    password = 'admin';
    email = '';
     constructor() { }

  login(username: string, password: string){
    if(username !== this.username && password !== this.password){

        return false;
    }
    else{
      return true;
    }
    // Placeholder, replace with actual logic
  }

  register(username: string, email: string, password: string): boolean {
    this.username = "";
    this.password = "";
    if(username!==this.username && password!==this.password && email!==this.email){
      return false;
    }
    else{
    return true; // Placeholder, replace with actual logic
  }
}
}
