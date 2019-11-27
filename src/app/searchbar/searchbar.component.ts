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

  /**
   * findThreeSuggestions function
   * Calls the SWAPI with the searchString input by user
   * Fills an array of threeSuggestions with up to three names
   * 
   * @param searchString global variable: the user input from the search bar
   * @param threeSuggestions global array: holds up to three suggestions based on user input
   */

  findThreeSuggestions() {
    
    this.dataService.searchPeople(this.searchString).subscribe((response: any) => {
      
      this.threeSuggestions = [];  //clear array

      //set length of array based on number of suggestions (max three)
      var numberOfSuggestions;

      if(response.results.length >= 3) {
        numberOfSuggestions = 3;
      }
      else {
        numberOfSuggestions = response.results.length;
      }

      //if there IS any search input, fill array with first three names
      if(this.searchString) {
        for(let i = 0; i < numberOfSuggestions; i++) {
          this.threeSuggestions.push(response.results[i].name);
        }
      }
    });
  } 

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

}
