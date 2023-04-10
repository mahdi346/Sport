import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.displayAllData().subscribe(
      (don)=>{
        console.log("display data", don);
        this.data = don.dataTable;
        
    })
  }

}
