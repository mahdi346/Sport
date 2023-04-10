import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches : any = [];

  constructor() { }

  ngOnInit() {
    // this.matches = [
    //   {id: 1, scoreOne:2, scoreTwo:0, teamOne:"barca",teamTwo:"real" },
    //   {id: 1, scoreOne:2, scoreTwo:0, teamOne:"barca",teamTwo:"real" },
    //   {id: 1, scoreOne:2, scoreTwo:0, teamOne:"barca",teamTwo:"real" },

    // ]
    this.matches= JSON.parse(localStorage.getItem("matches")|| "[]")
    
  }

}
