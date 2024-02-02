import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgModule,
    NgModel,
    LoginComponent,
    ReactiveFormsModule,
    FormGroup
  ],
  bootstrap:[AppComponent],
  providers:[Router,LoginComponent,AuthService],
})

export class AppModule { }
