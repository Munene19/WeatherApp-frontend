import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Weather-app";
  result : any;
  day: any;
  rainfall: any;
  chart: any = []

  constructor( private http : HttpClient) {

  }

  ngOnInit() {
    this.http.get("http://127.0.0.1:8000/api/datalist/").subscribe(Response => {
      this.result = Response;

      // this.day = this.result.data.day.map((day: any)=> day) 
      // this.rainfall = this.result.data.rainfall.map((rainfall: any)=> rainfall) 

      console.log(this.result)

    }

    )}}