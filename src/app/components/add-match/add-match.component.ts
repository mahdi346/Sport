import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { generateId } from 'src/app/generic functions/generateid';
import { MatchService } from 'src/app/services/match.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  matchForm : FormGroup;
  match : any = {};
  constructor(
    private router:Router,
    private matchService : MatchService) { }

  ngOnInit() {
  }

  addMatch () {
    // console.log("here",this.match);
    // var matches = JSON.parse(localStorage.getItem("matches") || "[]");
    // this.match.id = generateId(matches) + 1 ;
    // matches.push(this.match);
    // localStorage.setItem("matches", JSON.stringify(matches));
    // this.router.navigate(["admin"])
    this.matchService.addMatch(this.match).subscribe(
      (data)=> {
        console.log("here data after adding match", data.message);
        this.router.navigate(["admin"])
        
      });
  }

  
}
