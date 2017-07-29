import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApplicationRoutesComponent } from './routes/application-routes/application-routes.component';
import { AtmServiceService } from './atm-service.service';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    ApplicationRoutesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AtmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
