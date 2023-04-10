import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  editPlayerForm : FormGroup;
  id: any;
  player: any= {} ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService : PlayerService,
    private router : Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id", this.id);
    this.playerService.displayPlayerById(this.id).subscribe(
      (response)=>{
        console.log("here response from BE", response);
        this.player= response.player;
      })
    // this.player = searchById(this.id, "players");
    // console.log("here finded match", this.player);
  }
  players : any = [];
  editPlayer(){
    // this.playerService.displayAllPlayeres().subscribe(
    // (data)=>{
    //   this.players = data.playersTable;  
      
    // })
    this.playerService.editPlayer(this.player).subscribe(
      (response)=>{
        console.log("here data after edit",response.message);
        this.router.navigate(["admin"])
    });  
  }

}
