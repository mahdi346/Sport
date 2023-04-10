import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateId } from 'src/app/generic functions/generateid';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm : FormGroup;
  player :any = {};
  imagePreview : any ;
  constructor(private playerService : PlayerService,
    private fb : FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      img : [""],
    })
  }
  addPlayer() {
  // console.log("add here", this.player);
  // var players = JSON.parse(localStorage.getItem("players") || "[]");
  // this.player.id = generateId(players) + 1 ;
  // players.push(this.player);
  // localStorage.setItem("players", JSON.stringify(players));
  this.playerService.addPlayer(this.player,this.playerForm.value.img).subscribe(
    (data)=>{
      console.log("here data after adding player", data.message); 
  });
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.playerForm.patchValue({ img: file });
    this.playerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
  };
  reader.readAsDataURL(file);
  }

}
