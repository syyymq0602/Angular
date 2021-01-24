import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public username:string='JJ哦';
  public userinfo:object={
    name:'张三',
    age:20
  }
  public items:Array<any>=['AAA',2222,'wwww'];
  public list:any=[{
    name:'QQ',
    number:295217270
  },{
    name:'WX',
    number:29521727
  }];
  constructor() {
    this.username='哦豁变了'
   }

  ngOnInit() {
  }

}
