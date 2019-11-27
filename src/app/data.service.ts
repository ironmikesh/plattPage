import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private searchUrl = 'https://swapi.co/api/people/?search='

  constructor(private httpClient: HttpClient) { }

  public searchPeople(searchString){
    return this.httpClient.get(this.searchUrl + searchString);

  }
}
