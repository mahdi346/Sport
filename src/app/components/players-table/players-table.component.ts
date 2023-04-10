import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteObject } from 'src/app/generic functions/deleteObject';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players : any = [];
  constructor(
    private router: Router,
    private playerService: PlayerService) { }

  ngOnInit() {
    // this.players = JSON.parse(localStorage.getItem("players") || "[]")
    this.playerService.displayAllPlayers().subscribe(
      (data)=>{
        console.log("here player data from BE",data);
        this.players = data.playersTable
    });
  }
  
  deletePlayer(id) {
    // Call service to send delete request :
    this.playerService.deletePlayerById(id).subscribe(
      (data)=>{
        console.log("here data after deleting player",data.message);
        this.playerService.displayAllPlayers().subscribe(
          (data)=>{
            this.players = data.playersTable;
          }
        )  
    });
    // deleteObject(id, "matches");
    // this.players = JSON.parse(localStorage.getItem("players") || "[]");
  }

  displayPlayer(id) {
    // this.router.navigate([`displayPlayer/${id}`]);
    this.playerService.displayPlayerById(id).subscribe(
      (data)=>{
      console.log("here data after displaying player",data.player);
      this.router.navigate([`displayPlayer/${id}`]);      
    })

  }

  editPlayer(id) {
    this.router.navigate([`editPlayer/${id}`]);
  }

  pageOfItems: Array<any>;
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
  }
}
