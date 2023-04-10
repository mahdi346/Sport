import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { searchById } from "src/app/generic functions/searchById";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-display-match",
  templateUrl: "./display-match.component.html",
  styleUrls: ["./display-match.component.css"],
})
export class DisplayMatchComponent implements OnInit {
  id: any;
  match: any;
  constructor(private activatedRoute: ActivatedRoute,
    private matchService : MatchService,
    private router : Router) {}

  ngOnInit() {
    // this.id = +this.activatedRoute.snapshot.paramMap.get("id");
    // console.log("id", this.id);
    // this.match = searchById(this.id, "matches");
    // console.log("here finded match", this.match);
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id", this.id);
    this.matchService.displayMatchById(this.id).subscribe(
      (response)=>{
        console.log("here response from BE", response);
        this.match= response.match;
    })
  }

  
}
