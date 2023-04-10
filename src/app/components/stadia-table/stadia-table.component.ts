import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadia-table',
  templateUrl: './stadia-table.component.html',
  styleUrls: ['./stadia-table.component.css']
})
export class StadiaTableComponent implements OnInit {
  stadiums : any =[]
  constructor(private stadiumService: StadiumService,
    private router : Router) { }

  ngOnInit() {
    this.stadiumService.gettAllStadiums().subscribe((data)=>{
      this.stadiums = data.stadiumsTable;
    })
  }

  editStadium(id){
    this.router.navigate([`editStadium/${id}`]);
  }

}
