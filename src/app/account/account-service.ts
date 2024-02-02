// account.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userDetails: any = {
    name: 'Jasper Namala',
    email: 'jaspernamala@egmail.com'
    // Add more user details as needed
  };

  private contactInfo: any = {
    phone: '123-456-7890',
    address: '1-234, Katheru, Rajahmundry, India'
    // Add more contact information as needed
  };

  constructor() { }

  // Method to fetch user details
  getUserDetails(): any {
    return this.userDetails;
  }

  // Method to fetch contact information
  getContactInfo(): any {
    return this.contactInfo;
  }

  // Method to update user details
  updateUserDetails(updatedDetails: any): void {
    this.userDetails = { ...this.userDetails, ...updatedDetails };
  }

  // Method to update contact information
  updateContactInfo(updatedInfo: any): void {
    this.contactInfo = { ...this.contactInfo, ...updatedInfo };
  }
}
