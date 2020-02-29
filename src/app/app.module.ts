import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { EventlistComponent } from './components/eventlist/eventlist.component';
import{ HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
