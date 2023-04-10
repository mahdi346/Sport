import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input ()  matchInput : any
  constructor() { }

  ngOnInit() {
  }

  color(scOne,scTwo){
   let result
   if (scOne>scTwo) {
    result="green";
   } else if(scOne<scTwo) {
    result="orange";
   }
   else {
    result="blue";
   }
   return result
  }
}
