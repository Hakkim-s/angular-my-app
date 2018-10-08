import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './Header.component';
import { BodyComponent } from './Body.component';
import { SidenavComponent } from './sidenav.component';
import { FooterComponent } from './Footer.component';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    BodyComponent,
    FooterComponent,
    PageComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PageComponent
  ]
})
export class rocketModule { }
