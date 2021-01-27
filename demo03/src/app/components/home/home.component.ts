import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public flag:boolean=true;
  constructor() { }

  ngOnInit() {
    let oBox:any=document.getElementById("box");
    console.log(oBox.innerHTML);
    oBox.style.color="red";
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let box:any=document.getElementById("Box");
    box.style.color="blue";
  }

}
