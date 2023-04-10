import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-form',
  templateUrl: './stadium-form.component.html',
  styleUrls: ['./stadium-form.component.css']
})
export class StadiumFormComponent implements OnInit {
  stadiumForm : FormGroup
  id : any ;
  stadiumObj : any = {};
  title : string = "Add Stadium"
  constructor(private fb : FormBuilder,
    private stadiumService : StadiumService,
    private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit Stadium"
      // send request to get object
      this.stadiumService.getStadium(this.id).subscribe((data)=>{
        console.log("here object",data.stadium);
        this.stadiumObj = data.stadium;
      });
    }
    this.stadiumForm = this.fb.group({
      name : ["",[Validators.required]],
      capacity : ["",[Validators.required]],
      country : ["",[Validators.required]],
      foundation : ["",[Validators.required]],
    })
  }

  onSubmit(){
    console.log("here object",this.stadiumForm.value);

    // this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.stadiumService.editStadium(this.stadiumObj).subscribe(
        (response)=>{
          console.log("here data after edit",response.message);
          this.router.navigate(["admin"])
      }); 
    } else {
      this.stadiumService.addStadium(this.stadiumForm.value).subscribe(
        (data)=>{
          console.log("here response",data.message);          
      })
    }    
  }
}
