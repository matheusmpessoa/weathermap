import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  public getWeatherDataByCoords(lat: number, lon: number): Observable<any> {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', environment.units)
      .set('appid', environment.appId);

    return this.http.get(environment.baseUrl, { params });
  }

  public getWeatherDataByCityname(city: string): Observable<any> {
    let params = new HttpParams()
      .set('q', city)
      .set('units', environment.units)
      .set('appid', environment.appId);

    return this.http.get(environment.baseUrl, { params });
  }
}
