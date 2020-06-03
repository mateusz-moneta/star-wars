import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EndpointForCategory } from '../interfaces/endpoint-for-category.interface';

@Injectable({
  providedIn: 'root'
})
export class StarWarsApiService {
  readonly apiPath = 'https://swapi.dev/api/';

  constructor(private httpClient: HttpClient) {}

  loadEndpointsForCategories(): Observable<EndpointForCategory[]> {
    return this.httpClient.get<EndpointForCategory[]>(this.apiPath);
  }

  loadCategory(endpoint: string): Observable<any> {
    return this.httpClient.get<any>(endpoint);
  }
}
