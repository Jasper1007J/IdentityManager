// account-info.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account-service';

@Component({
  selector: 'app-account-info',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  userDetails: any;
  contactInfo: any;

  constructor(private accountService: AccountService,private router : Router) { }

  ngOnInit(): void {
    // Fetch user account information from the service
    this.userDetails = this.accountService.getUserDetails();
    this.contactInfo = this.accountService.getContactInfo();
  }

  editAccount(){
    this.router.navigate(['/edit-account']);
  }
  logout(){
    this.router.navigate(['/']);
  }
}
