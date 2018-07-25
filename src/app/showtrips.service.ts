import { Weekendtrip } from './weekendtrip';
import { HttpClient, HttpResponse, HttpRequest, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowtripsService {

  baseURL = 'http://localhost:3000/weekEndTrips';
  constructor(private http: HttpClient) { }


   findAll(): Observable<HttpResponse<Object>> {

   return  this.http.get<HttpResponse<Object>>(this.baseURL, {observe: 'response'});
   }

   find(): Observable<Weekendtrip[]> {

      return  this.http.get<Weekendtrip[]>(this.baseURL);

 }

 findAllWithPromise(): Promise<Weekendtrip[]> {
  return this.http.get<Weekendtrip[]>(this.baseURL).toPromise();
  }

}
