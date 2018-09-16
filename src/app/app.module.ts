import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { UiModule } from './ui/ui.module';
import { WeatherModule } from './weather/weather.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    WeatherModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
