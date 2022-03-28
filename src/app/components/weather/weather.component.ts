import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherService } from 'src/app/services/weather.service';
import { Icoords } from 'src/app/models/icoords';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  public subscriptionCityName!: Subscription;
  public subscriptionLocation!: Subscription;

  public weatherData: any = {};
  public coords!: Icoords;
  public moreInfo: boolean = false;
  public moreInfoText: string = 'Show More Info';
  public flag: boolean = true;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.currentLocation();
  }

  public currentLocation() {
    if ('geolocation' in navigator) {
      this.coords = {
        lat: 0,
        lon: 0,
      };

      navigator.geolocation.watchPosition((position) => {
        this.coords.lat = position.coords.latitude;
        this.coords.lon = position.coords.longitude;
        if (this.flag == true) {
          this.getLocation(this.coords);
          this.flag = false;
        }
      });
    }
  }

  public getCity(city: string) {
    this.subscriptionCityName = this.weatherService
      .getWeatherDataByCityname(city)
      .subscribe(
        (res) => {
          console.log('Subscribe Resolved with ' + JSON.stringify(res));
          this.weatherData = res;
        },
        (error) => {
          console.log('Subscribe Rejected with ' + JSON.stringify(error));
          this.weatherData = error;
        }
      );
  }

  public getLocation(position: Icoords) {
    this.subscriptionLocation = this.weatherService
      .getWeatherDataByCoords(position.lat, position.lon)
      .subscribe(
        (res) => {
          console.log('Subscribe resolved with : ' + JSON.stringify(res));
          this.weatherData = res;
        },
        (error) => {
          console.log('Subscribe rejected with : ' + JSON.stringify(error));
          this.weatherData = error;
        }
      );
  }

  ngOnDestroy() {
    if (this.subscriptionCityName) {
      this.subscriptionCityName.unsubscribe();
      this.subscriptionLocation.unsubscribe();
    }
  }
}
