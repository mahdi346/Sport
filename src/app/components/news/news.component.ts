import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor() { }
  newsItem :any =[];

  ngOnInit() {
    this.newsItem = [
      {id :1, title: "title1" , img: "assets/images/img_1.jpg", author:"Abderrahmen", date1:"04/08/2022",avatar :""},
      {id :2 ,title: "title2",  img: "assets/images/img_2.jpg", author:"Saleh", date1:"04/08/2022",avatar :""},
      {id :3 ,title: "title3",  img: "assets/images/img_3.jpg", author:"Karim", date1:"04/08/2022",avatar :""},
      {id :4 ,title: "title4" , img: "assets/images/img_1.jpg", author:"Ali", date1:"04/08/2022",avatar :""},
      {id :5 ,title: "title5",  img: "assets/images/img_2.jpg", author:"Mohsen", date1:"04/08/2022",avatar :""}
    ];
  }

}
