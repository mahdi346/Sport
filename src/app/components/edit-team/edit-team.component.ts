import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { searchById } from 'src/app/generic functions/searchById';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamForm : FormGroup;
  team:any={};
  id:number;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=+ this.activatedRoute.snapshot.paramMap.get("id");
    this.team = searchById(this.id,"teams");
  }

}
