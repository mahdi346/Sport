import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor() { }

  users : any = [];
  matches : any = [];
  teams : any = [];
   

  ngOnInit() {
    // this.users = JSON.parse(localStorage.getItem("users") || '[]');
    // this.matches = JSON.parse(localStorage.getItem("matches") || '[]');
    // this.teams = JSON.parse(localStorage.getItem("teams") || '[]');


  }

}
