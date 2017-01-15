import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MainComponent }  from './components/main.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent, MainComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
