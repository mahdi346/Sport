import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm : FormGroup;
  match : any = {};
  matches : any = [];
  constructor(private searchService : SearchService) { }

  ngOnInit() {
  }

  searchMatch(){
    this.searchService.searchMatch(this.match).subscribe(
      (response)=>{
        console.log("here finded matches",response.allMatches);
        this.matches = response.allMatches;
    });
  }
}
