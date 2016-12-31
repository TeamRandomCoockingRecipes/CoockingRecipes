import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AutenticationRoutes } from './autentication.routing';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,
    AutenticationRoutes
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
  ]
})
export class AutenticationModule { }
