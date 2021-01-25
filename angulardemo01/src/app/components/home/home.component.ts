import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageurl:string='https://abp.io/assets/abp-logo-light.svg';

  public baiduurl:string="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";
  public list:any[]=[{
    "title":"我是你啊"
  },{
    "title":"我不是你啊"
  },{
    "title":"哦哟"
  }];

  public flag:boolean=true;

  public attr:string='#ffaaaa';

  public today:any=new Date();
  public keywords='默认值';
  constructor() { }

  ngOnInit() {
  }

  run()
  {
    alert('被执行');
  }
  setData(){
    this.attr='#aaaaaa';
  }
  keyDown(e){
    console.log(e.keyCode);
  }
}
