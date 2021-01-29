import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titl:string="我是home组件标题";
  public msg:string="我是父组件的msg";
  constructor() { }

  ngOnInit() {
  }
  run(){
    alert('我是父组件的run方法');
  }

}
