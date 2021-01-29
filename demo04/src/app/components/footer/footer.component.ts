import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() private outer:any=new EventEmitter();
  public msg:string="我是子组件的msg";
  constructor() { }

  ngOnInit() {
  }

  run(){
    alert("我是子组件的run方法");
  }

  sendParent(){
    this.outer.emit('我是子组件的数据');
  }

}
