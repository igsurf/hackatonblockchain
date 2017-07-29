import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationRoutesComponent } from './routes/application-routes/application-routes.component';
import { AtmsyncComponent } from './atmsync/atmsync.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationRoutesComponent,
    AtmsyncComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
