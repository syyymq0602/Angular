import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild("footer",{static:true}) footer:any;
  constructor() { }

  ngOnInit() {
  }

  getChildMsg(){
    alert(this.footer.msg);
  }

  getChildRun(){
    this.footer.run();
  }

  run(e){
    alert(e);
  }
}
