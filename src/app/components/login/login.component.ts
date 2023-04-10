import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  user : any = {};
  name : string = "mahdi";
  message : string;
  constructor(private userService : UserService,
    private router: Router) { }

  ngOnInit() {
    
  }

  login(){  
    this.userService.login(this.user).subscribe((data)=>{
      console.log("object",data);
      if (!(data.user)) {
        this.message ="Please check email/pwd"
      } else if (data.user.role ="admin"){
        localStorage.setItem("ConnectedUser",JSON.stringify(data.user));
        this.router.navigate(["admin"]);
      }

    })
  }
}