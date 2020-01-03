import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './service/service.service';

import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCTvbyI3wJlaeO_LX3khAnVotS96c4cWBM'
    })
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
