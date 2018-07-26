import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelAgent } from './travel-agent';

@Injectable({
  providedIn: 'root'
})
export class AgentApiService {

   baseURL = 'http://localhost:3000/agents';

  constructor(private http: HttpClient) { }

   findAllAgents(): Observable<TravelAgent[]> {

      return this.http.get<TravelAgent[]>(this.baseURL);

    }

   findAgentById(id: number): Observable<TravelAgent> {

    return this.http.get<TravelAgent>(this.baseURL + `/${id}`);

   }
   addAgent(agent: TravelAgent) {}
   removeAgent(id: number) {

    return this.http.delete<>(this.baseURL + `/${id}`);

   }
   findReviews(name): Observable<HttpResponse<{}>{

     return this.http.get<HttpResponse<{}>>('http://localhost:3000/agentReviews?name=' + name);

   }
}
