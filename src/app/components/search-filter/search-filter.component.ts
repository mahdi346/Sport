import { Component, OnInit } from '@angular/core';
import { SearchFilterService } from 'src/app/services/search-filter.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  matches : any = [];
  constructor(private searchFilterService: SearchFilterService) { }

  ngOnInit() {
  }

  searchMatch(){
    
  }
}
