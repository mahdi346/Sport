import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { deleteObject } from "src/app/generic functions/deleteObject";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-matches-table",
  templateUrl: "./matches-table.component.html",
  styleUrls: ["./matches-table.component.css"],
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];
  constructor(
    private router: Router,
    private matchService : MatchService) {}

  ngOnInit() {
    // call service to get all matches
    // this.matches = JSON.parse(localStorage.getItem("matches") || "[]");
    this.matchService.displayAllMatches().subscribe(
      (data)=>{
        console.log("here data from BE",data);
        this.matches = data.matchesTable;
    });
  }

  deleteMatch(id) {
    // deleteObject(id, "matches");
    // this.matches = JSON.parse(localStorage.getItem("matches") || "[]");
    this.matchService.deleteMatchById(id).subscribe(
      (data)=>{
        console.log("here data after deleting player",data.message);
        this.matchService.displayAllMatches().subscribe(
          (data)=>{
            this.matches = data.matchesTable;
          }
        )  
    });
  }

  displayMatch(id) {
    this.router.navigate([`displayMatch/${id}`]);
    // this.router.navigate(["displayMatch/"+ id]);
  }

  editMatch(id) {
    this.router.navigate([`editMatch/${id}`]);
  }

}
