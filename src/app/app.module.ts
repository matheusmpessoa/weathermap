import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularMaterialModule } from './shared/material.module';
import { ComponentsModule } from './components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ComponentsModule,
    MatIconModule
  ],
  providers: [
    HttpClientModule,
    WeatherService
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
