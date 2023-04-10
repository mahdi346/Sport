import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { deleteObject } from "src/app/generic functions/deleteObject";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-teams-table",
  templateUrl: "./teams-table.component.html",
  styleUrls: ["./teams-table.component.css"],
})
export class TeamsTableComponent implements OnInit {
  teams: any = [];
  constructor(
    private router: Router,
    private teamService: TeamService) {}

  ngOnInit() {
    // this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.teamService.displayAllTeams().subscribe(
      (data)=>{
        console.log("here player data from BE",data);
        this.teams = data.teamsTable;
    });
  }

  deleteTeam(id) {
    // deleteObject(id, "teams");
    // this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.teamService.deleteTeamById(id).subscribe(
      (data)=>{
        console.log("here data after deleting player",data.message);
        this.teamService.displayAllTeams().subscribe(
          (data)=>{
            this.teams = data.teamsTable;
          }
        )  
    });
  }
  
  displayTeam(id) {
    this.router.navigate([`displayTeam/${id}`]);
  }

  editTeam(id) {
    this.router.navigate([`editTeam/${id}`]);
  }
}
