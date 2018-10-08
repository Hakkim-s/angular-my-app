import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { rocketModule } from './rocket.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    rocketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
