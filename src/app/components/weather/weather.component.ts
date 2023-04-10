import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm : FormGroup;
  weather : any = {};
  result: any;
  isLoaded : boolean;

  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
  }
  search(){
    this.isLoaded=true;
    this.weatherService.searchWeatherCountry(this.weather).subscribe((data)=>{
      console.log("object",data.result);
      this.isLoaded = false;
        this.result = data.result ;
    })
  }
}
