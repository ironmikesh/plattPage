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
  searchString = 'ha';

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getPeople().subscribe((data: any[])=>{
      console.log('Simple Get Data is: ', data);
      this.names = data;
    })

    this.dataService.searchPeople(this.searchString).subscribe((response)=>{
      console.log('Search Response for ha is : ', response);
      // this.searchResults = response;
      // console.log('searchResults == ', this.searchResults);
    })
  }



}
