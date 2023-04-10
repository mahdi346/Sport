import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { searchById } from 'src/app/generic functions/searchById';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchForm : FormGroup;
  id: any;
  match: any = {};
  constructor(private activatedRoute: ActivatedRoute,
    private matchService : MatchService,
    private router : Router) {}
  ngOnInit() {
    // this.id= this.activatedRoute.snapshot.paramMap.get("id");
    // this.match = searchById(this.id,"matches");
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id", this.id);
    this.matchService.displayMatchById(this.id).subscribe(
      (response)=>{
        console.log("here response from BE", response);
        this.match= response.match;
    })
    
  }
  // validate (){ 
  // console.log("here new values", this.match);
  // let matches = JSON.parse(localStorage.getItem("matches")|| "[]");
  // for (let i = 0; i < matches.length; i++) {
  //   if (matches[i].id ==this.id) {
  //    matches[i]=this.match
  //    break;
  //   }
  // }
  // localStorage.setItem("matches",JSON.stringify(matches));
  // }
  editMatch(){
    this.matchService.editMatch(this.match).subscribe(
      (response)=>{
        console.log("here data after edit",response.message);
        this.router.navigate(["admin"])
    });  
  }
}
