import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAside(){
    let aside:any=document.getElementById('aside');
    aside.style.transform="translate(0.0)";
  }
  hideAside(){
    let aside:any=document.getElementById('aside');
    aside.style.transform="translate(100%,0)";
  }
}
