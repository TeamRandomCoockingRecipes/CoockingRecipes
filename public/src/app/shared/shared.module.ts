import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { AutenticationModule } from '../autentication/autentication.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { PagerService } from './services/paager/pager.service';

import { HighlightDirective } from './directives/highlight.directive';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AutenticationModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    HighlightDirective,
    HoverDirective
  ],
  providers: [
    PagerService
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HighlightDirective,
    HoverDirective
  ]
})
export class SharedModule { }