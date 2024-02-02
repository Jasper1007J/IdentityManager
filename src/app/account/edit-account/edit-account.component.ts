// edit-account.component.ts
import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account-service';

@Component({
  selector: 'app-edit-account',
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})

export class EditAccountComponent implements OnInit {
  editForm!:FormGroup;
  userDetails: any;
  contactInfo: any;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService,private routes: Router){ }

  ngOnInit(): void {
    // Initialize form with current user details
    this.userDetails = this.accountService.getUserDetails();
    this.contactInfo = this.accountService.getContactInfo();
    this.createForm();
  }

  // Create form with validation rules
  createForm(): void {
    this.editForm = this.formBuilder.group({
      name: [this.userDetails.name, Validators.required],
      email: [this.userDetails.email, [Validators.required, Validators.email]],
      phone: [this.contactInfo.phone, Validators.required],
      address: [this.contactInfo.address, Validators.required]
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedUserDetails = {
        name: this.editForm.value.name,
        email: this.editForm.value.email
      };
      const updatedContactInfo = {
        phone: this.editForm.value.phone,
        address: this.editForm.value.address
      };
      // Update user details and contact information
      this.accountService.updateUserDetails(updatedUserDetails);
      this.accountService.updateContactInfo(updatedContactInfo);
      console.log("updated Successfully");
      this.routes.navigate(['/account-info']);
      // Optionally, add logic to show success message or navigate to another page
    } else {
      // Form is invalid, display validation errors
      alert('Invalid Content');
    }
  }
}
