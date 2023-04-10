import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {
  searchFilterURL : string ="http://localhost:3000/filter";

  constructor(private httpClient:HttpClient) { }

  searchMatch(){
    return this.httpClient.get<{match : any}>(this.searchFilterURL);
  }

}
