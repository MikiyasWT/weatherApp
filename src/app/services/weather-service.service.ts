import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http : HttpClient) {

   }

   getWeatherData(cityname:string):Observable<WeatherData>{
     return this.http.get<WeatherData>(environment.weatherApiUrl, {
       headers: new HttpHeaders()
         .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
         .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
       params: new HttpParams()
         .set('q', cityname)
         .set('units', 'metric')
         .set('mode', 'json')
     });
   }
}
