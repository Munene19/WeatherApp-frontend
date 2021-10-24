import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {  
  title = 'Weather chart';
  forecast: any;
  day: any;
  rainfall: any;
  chart: any = []
  constructor(private wService: WeatherService) { }

  ngOnInit(): void {
    this.Allforecast();
  }

  Allforecast() {
    this.wService.getdailyForecast().subscribe(forecast => {
      this.forecast = forecast;
      this.day = this.forecast.data.day.map((day: any)=> day) 
      this.rainfall = this.forecast.data.rainfall.map((rainfall: any)=> rainfall) 
    })
  }
}
