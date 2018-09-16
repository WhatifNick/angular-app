import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // WeatherModule
  ],
  providers: [WeatherService],
  declarations: [WeatherComponent],
  exports: [WeatherComponent]
})
export class WeatherModule { }
