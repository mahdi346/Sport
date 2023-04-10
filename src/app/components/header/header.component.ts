import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  visitor = true;
  admin = false;
  constructor(private router: Router) {}

  ngOnInit() {
    let connectedUser = JSON.parse(localStorage.getItem("ConnectedUser"));

    if (connectedUser) {
      this.visitor = false;
      console.log(connectedUser.role);
      this.admin = true;
    } 
    // else if (connectedUser.role == "admin") {
    //   this.admin = true;
    // }
    console.log(this.visitor);
    console.log(this.admin);
  }

  logout(){
    localStorage.removeItem("ConnectedUser")
    // localStorage.clear()
    console.log(this.visitor);
    this.router.navigate([""]);  
  }
}
