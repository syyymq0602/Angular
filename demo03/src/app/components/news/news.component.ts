import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @ViewChild('myBox',{static:true}) mybox:any;
  @ViewChild('header',{static:true}) header:any;

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.mybox);
    this.mybox.nativeElement.style.color="pink";
    this.mybox.nativeElement.style.height="100px";
    this.mybox.nativeElement.style.width="100px";
    this.mybox.nativeElement.style.background="red";

  }

  getchildrun(){
    this.header.run();
  }
}
