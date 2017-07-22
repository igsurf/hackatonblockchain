import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationRoutesComponent } from './routes/application-routes/application-routes.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationRoutesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
