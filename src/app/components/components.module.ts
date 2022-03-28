import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularMaterialModule } from '../shared/material.module';

import { WeatherComponent } from './weather/weather.component';
import { WeatherHeaderComponent } from './weather-header/weather-header.component';

import { WeatherService } from '../services/weather.service';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [
    WeatherComponent,
    WeatherHeaderComponent
  ],
  providers: [
    HttpClientModule,
    WeatherService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
