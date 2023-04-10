import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateId } from 'src/app/generic functions/generateid';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm : FormGroup;
  team : any = {}
  constructor(private teamService : TeamService) { }

  ngOnInit() {
  }

  addTeam(){
    // console.log("here",this.team);
  
    // var teams = JSON.parse(localStorage.getItem("teams") || "[]");
    // this.team.id = generateId(teams) + 1 ;
    // teams.push(this.team);
    // localStorage.setItem("teams", JSON.stringify(teams));
    this.teamService.addTeam(this.team).subscribe(
      (data)=>{
        console.log("here data after adding team",data.message);
        
      });
  }

  
}
