import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../enums/category.enum';
import { EndpointForCategory } from '../interfaces/endpoint-for-category.interface';
import { ItemsForCategory } from '../interfaces/items-for-category.interface';
import { People } from '../interfaces/people.interface';
import { Vehicle } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class StarWarsApiService {
  readonly apiPath = 'https://swapi.dev/api';

  constructor(private httpClient: HttpClient) {}

  loadEndpointsForCategories(): Observable<EndpointForCategory[]> {
    return this.httpClient.get<EndpointForCategory[]>(this.apiPath);
  }

  loadItemForCategory(category: Category, id: number): Observable<People | Vehicle> {
    return this.httpClient.get<People | Vehicle>(`${this.apiPath}/${category}/${id}/`);
  }

  loadItemsForCategory(category: Category, page = 1): Observable<ItemsForCategory> {
    return this.httpClient.get<ItemsForCategory>(`${this.apiPath}/${category}/?page=${page}`);
  }
}
