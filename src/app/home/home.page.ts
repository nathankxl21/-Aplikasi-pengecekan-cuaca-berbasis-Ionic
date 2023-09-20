import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cityList: string[] = ['Manado', 'Jakarta', 'Seoul','Chengdu,','Istambul','Tokyo']; 
  weatherData: { [cityName: string]: any } = {}; 

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    for (const cityName of this.cityList) {
      this.weatherService.getWeather(cityName).subscribe((data) => {
        // Menyimpan data cuaca ke dalam objek berdasarkan nama kota
        this.weatherData[cityName] = data;
      });
    }
  }

  getWeatherIcon(iconCode: string): string {
    switch (iconCode) {
      case '01d':
        return 'sunny';
      case '01n':
        return 'moon';
      case '02d':
        return 'partly-sunny';
      default:
        return 'cloud';
    }
  }
}
