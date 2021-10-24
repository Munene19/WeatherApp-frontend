import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable(
)
export class WeatherService {
  api_link: string = "http://127.0.0.1:8000/";
  constructor(private _http: HttpClient) { }
 
  getdailyForecast(){
    return this._http.get(this.api_link + 'api/datalist');
  }
}
