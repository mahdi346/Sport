import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchURL : string = "http://localhost:3000/search";
  constructor(private httpClient:HttpClient) { }

  // obj : {teamOne : val 1 , teamTwo: val 2}
  searchMatch (obj){
    return this.httpClient.post<{allMatches : any}>(this.searchURL,obj);
  }
}
