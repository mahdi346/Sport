import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
  stadiumURL : string = "http://localhost:3000/stadiums"
  constructor(private http:HttpClient) { }

  addStadium(obj){
    return this.http.post<{message : string}>(this.stadiumURL,obj)
  }
  gettAllStadiums(){
    return this.http.get<{stadiumsTable : any}>(this.stadiumURL)
  }
  getStadium(id){
    return this.http.get<{stadium : any}>(`${this.stadiumURL}/${id}`)
  }

  editStadium(stadiumObj){
    return this.http.put<{message : any}>(`${this.stadiumURL}/${stadiumObj._id}`, stadiumObj);
  }
}
