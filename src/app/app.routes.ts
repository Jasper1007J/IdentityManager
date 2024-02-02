import { Routes } from '@angular/router';

import { AccountInfoComponent } from './account/account-info/account-info.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page by default
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account-info', component: AccountInfoComponent },
  { path: 'edit-account', component: EditAccountComponent },
  // Add more routes for additional functionality as needed
];

export default routes;
