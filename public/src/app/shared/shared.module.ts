import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { AutenticationModule } from '../autentication/autentication.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { PagerService } from './services/paager/pager.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AutenticationModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  providers: [
    PagerService
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }