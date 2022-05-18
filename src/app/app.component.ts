import { Component, OnInit } from '@angular/core';

import { WeatherData } from './models/weather.model';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  constructor(private weatherService: WeatherServiceService){}

  title = "weatherApp"
  cityname : string = "dubai"

  weatherData!: WeatherData;

  ngOnInit(): void {
    this.getWeather(this.cityname);
    this.cityname = "";

  }

  search(){
    
    this.getWeather(this.cityname);
    this.cityname = "";
  }

  private getWeather(cityname: string){
    this.weatherService.getWeatherData(cityname)
    .subscribe({
      next:(res) =>{
        this.weatherData = res
      },
      error:(err)=> {
        console.log(err);
      }
    } 
    );
  }
  
}
