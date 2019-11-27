import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  names = [];
  searchResults = [];
  searchString = '';
  threeSuggestions = [];


  findThreeSuggestions() {
    
    console.log('searchString = ', this.searchString);
    this.dataService.searchPeople(this.searchString).subscribe((response: any) => {
      console.log('Search Response is : ', response);
      
      this.threeSuggestions = [];
      var numberOfSuggestions;

      if(response.results.length >= 3) {
        numberOfSuggestions = 3;
      }
      else {
        numberOfSuggestions = response.results.length;
      }

      if(this.searchString) {
        for(let i = 0; i < numberOfSuggestions; i++) {
          this.threeSuggestions.push(response.results[i].name);
        }
      }
      
      console.log('this.threeSuggestions: ', this.threeSuggestions);
           
    })
  } 

 

  constructor(private dataService: DataService) { }

  ngOnInit() {

    // this.dataService.getPeople().subscribe((data: any[]) => {
    //   console.log('Simple Get Data is: ', data);
    //   this.names = data;
    //   console.log('this.names = ', this.names);
    // })

    // this.dataService.searchPeople(this.searchString).subscribe((response) => {
    //   console.log('Search Response is : ', response);
    //   // this.searchResults = response;
    //   // console.log('searchResults == ', this.searchResults);
    // })

    console.log('this.threeSuggestions: ', this.threeSuggestions);

  }





}
