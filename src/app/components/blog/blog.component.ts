import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  ch : string = "abderrahmen"
  constructor() { }
  articles : any = []
  x : any = []
  ngOnInit() {
    this.articles = [
    {id :1, title: "title1" ,description: "description 1", img: "", author:"Abderrahmen", date:"04/08/2022"},
    {id :2 ,title: "title2", description: "description 2", img: "", author:"Saleh", date:"04/08/2022"},
    {id :3 ,title: "title3", description: "description 3", img: "", author:"Karim", date:"04/08/2022"},
    {id :4 ,title: "title4" ,description: "description 4", img: "", author:"Ali", date:"04/08/2022"},
    {id :5 ,title: "title5", description: "description 5", img: "", author:"Mohsen", date:"04/08/2022"}
  ];
  }

  // verif(c,t){
  //   var exist = false;
  //   for (let i = 0; i < t.length; i++) {
  //       if (t[i]==c) {
  //         exist = true;
  //         break;
  //       }      
  //   }
  //   return exist
  // }
  // execute(){
  //   for (let i = 0; i < this.ch.length-1; i++) {
  //     if (!verif(ch[i],x)) {
  //       var s = 1 ;
  //       for (let j = i+1 ; j < this.ch.length; j++) {
  //         if (this.ch[i] == this.ch[j]) {
  //         s= s + 1 ;
  //         }
  //       } 
  //       x[this.x.length+1]= ch[i]
  //       for (let k = 0; k < this.ch.length; k++) {
  //        console.log();
  //       }
  //     }
  //   }
      
  // }
}
