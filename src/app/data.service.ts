import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http'; //this is what came up by default
import { HttpClient } from '@angular/common/http';  //this is from techiediaries


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://swapi.co/api/people/';
  private searchUrl = 'https://swapi.co/api/people/?search='

  //private REST_API_SERVER = 'https://swapi.co/api/';

  constructor(private httpClient: HttpClient) { }

  public getPeople() {
      return this.httpClient.get(this.url);
  }

  public searchPeople(searchString){
    return this.httpClient.get(this.searchUrl + searchString);

  }
}
