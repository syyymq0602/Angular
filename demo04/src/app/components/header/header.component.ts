import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title:any;

  @Input('message') msg:string;

  @Input() Run:any;

  @Input() home:any;
  constructor() { }

  ngOnInit() {
  }

  getParentRun(){
    alert(this.home.titl);
    this.home.run();
  }

}
