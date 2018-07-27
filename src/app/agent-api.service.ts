import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
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
   addAgent(agent: TravelAgent): Observable<HttpResponse<{}>> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    return  this.http.post<HttpResponse<{}>>(this.baseURL, agent, {headers});
   }
   removeAgent(id: number): Observable<HttpResponse<{}>> {

    return this.http.delete<HttpResponse<{}>>(this.baseURL + `/${id}`);
  
   }
   findReviews(name): Observable<HttpResponse<{}>> {

     return this.http.get<HttpResponse<{}>>
      ('http://localhost:3000/agentReviews?name=' + name);

   }
}
