import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  user : any = {};
  constructor(private formBuilder:FormBuilder,
    private userService : UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName : ["", [Validators.required, Validators.minLength(3)]],
      lastName : ["", [Validators.required, Validators.minLength(5)]],
      email : ["", [Validators.email, Validators.required]],
      pwd : ["", [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      confirmPwd : [""]
    },{
      validators : MustMatch("pwd","confirmPwd")
    })
  }
  signup(){
    // alert("signup clicked !!")
    // console.log("here user", this.signupForm.value);
    // var users = JSON.parse(localStorage.getItem("users") || "[]");
    // users.push(this.signupForm.value);
    // localStorage.setItem("users", JSON.stringify(users));
    this.userService.signup(this.signupForm.value).subscribe((data)=>{
      console.log("here user",data.user);
      
    })

    
  }
}
