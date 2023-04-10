import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { searchById } from 'src/app/generic functions/searchById';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm : FormGroup;
  player:any={};
  id:number;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=+ this.activatedRoute.snapshot.paramMap.get("id");
    this.player = searchById(this.id,"players");
    
  }

}
